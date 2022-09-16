const fs = require('fs');
const path = require('path');
const { httpGet } = require('./request');

const GH_HOME = 'https://github.com';
const GH_API = 'https://api.github.com';
const GH_REPO_API = `${GH_API}/repos`;
const GH_ORG_API = `${GH_API}/orgs`;

const tokenPath = path.resolve(__dirname, '../../ignore/.gh-token');
const token = fs.readFileSync(tokenPath, 'utf8');
const BASE_CONFIG = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

async function crawlRepo(url) {
  url = url.replace(/\/$/, '');
  const name = url.replace(GH_HOME, '');

  let repoInfo;
  if (name.lastIndexOf('/')) {
    repoInfo = await httpGet(url.replace(GH_HOME, GH_REPO_API), BASE_CONFIG);
  } else {
    // 取组织中 stars 最多的项目
    const repos = await httpGet(url.replace(GH_HOME, GH_ORG_API) + '/repos?per_page=100', BASE_CONFIG);
    repoInfo = repos.sort((a, b) => a.stargazers_count - b.stargazers_count).pop();
  }

  return {
    homepage: repoInfo.homepage || '',
    repository: url,
    stars: repoInfo.stargazers_count,
    desc: repoInfo.description,
    pushTime: new Date(repoInfo.pushed_at).getTime(),
    crawlTime: Date.now(),
  };
}

/**
 * @example
 * crawlRepo("https://github.com/vuejs/core").then(JSON.stringify).then(console.log);
 */

module.exports = { crawlRepo };
