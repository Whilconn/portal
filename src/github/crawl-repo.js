const fs = require('fs');
const path = require('path');
const { httpGet } = require('../utils/request');

const GH_HOME = 'https://github.com';
const GH_API = 'https://api.github.com';
const GH_REPO_API = `${GH_API}/repos`;

const tokenPath = path.resolve(__dirname, '../../ignore/.gh-token');
const token = fs.readFileSync(tokenPath, 'utf8');
const BASE_CONFIG = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

async function crawlRepo(url) {
  // 校验 github 仓库链接是否合法
  const repoReg = new RegExp(`^${GH_HOME}/[^/]+/[^/]+/?$`, 'i');
  if (!repoReg.test(url)) throw new Error('The url is not valid github repository!');

  const repoInfo = await httpGet(url.replace(GH_HOME, GH_REPO_API), BASE_CONFIG);

  return {
    homepage: repoInfo.homepage || '',
    repository: url,
    stars: repoInfo.stargazers_count,
    desc: repoInfo.description,
    pushTime: new Date(repoInfo.pushed_at).getTime(),
  };
}

/**
 * @example
 * crawlRepo("https://github.com/vuejs/core").then(JSON.stringify).then(console.log);
 */
module.exports = { crawlRepo };
