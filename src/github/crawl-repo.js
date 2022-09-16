const { httpGet } = require('./request');

const GH_HOME = 'https://github.com';
const GH_API = 'https://api.github.com';
const GH_REPO_API = `${GH_API}/repos`;
const GH_ORG_API = `${GH_API}/orgs`;

async function crawlRepo(url) {
  url = url.replace(/\/$/, '');
  const name = url.replace(GH_HOME, '');

  let repoInfo;
  if (name.lastIndexOf('/')) {
    repoInfo = await httpGet(url.replace(GH_HOME, GH_REPO_API));
  } else {
    // 取组织中 stars 最多的项目
    const repos = await httpGet(url.replace(GH_HOME, GH_ORG_API) + '/repos?per_page=100');
    repoInfo = repos.sort((a, b) => a.stargazers_count - b.stargazers_count).pop();
  }

  return {
    homepage: repoInfo.homepage,
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
