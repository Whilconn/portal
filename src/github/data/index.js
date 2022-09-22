const mirrorJson = require('./mirrors.json');
const ghRepos = require('./repos.json');
const { loadDocument } = require('../../utils/dom-util');

const DOT = '.';
const JS = 'js';
const DOT_JS = `.${JS}`;
const CSS = 'css';
const DOT_CSS = `.${CSS}`;

/**
 * @desc 统一将协议改为 https，并转为 URL 对象，不保证可正常访问
 * @param {*} l
 * @example input://www.google.com  return:new URL('https://www.google.com')
 * @returns URL
 */
function normalize(l) {
  l = 'https://' + l.replace(/^https?:/, '').replace(/^\/\//, '');
  return new URL(l.toLowerCase());
}

/**
 * 从域名中提取网站名
 * @param {*} hostname
 * @example input:www.google.com  return:google
 */
function getSiteName(hostname) {
  let tokens = hostname.split(DOT);
  const reg = /^(www|dev|io|cn|com|org|bootcss|docschina|github|es)$/;

  tokens = tokens.filter((t) => !reg.test(t));
  return tokens.join(DOT);
}

/**
 * 按网站名或仓库名猜想更多关键词
 * @param {*} name
 * @returns
 */
function guessNames(name) {
  if (/\s/.test(name)) return [];

  if (name.endsWith(CSS)) {
    const n = name.replace(new RegExp(`[.]?${CSS}$`, 'i'), '');
    return [n, n + CSS, n + DOT_CSS];
  }

  const n = name.replace(new RegExp(`[.]?${JS}$`, 'i'), '');
  return [n, n + JS, n + DOT_JS];
}

const repoSet = new Set(ghRepos.map((r) => r.repository.toLowerCase()));

function transformRepos() {
  const SKIP_REG = /vuejs|vitejs/i;

  const repos = ghRepos
    .map((r) => {
      if (SKIP_REG.test(r.repository))
        return repoSet.delete(r.repository), console.warn('[SKIP]:', r.repository, 'Reason: skip', SKIP_REG.toString());
      if (r.stars < 1000)
        return repoSet.delete(r.repository), console.warn('[SKIP]:', r.repository, 'Reason: stars', r.stars);

      const ghUrl = normalize(r.repository);
      const homeUrl = normalize(r.homepage);

      const repoFullName = ghUrl.pathname.replace(/^\/|\/$/, '');
      const repoName = repoFullName.replace(/[^/]+\//, '');
      const siteFullName = homeUrl.hostname.replace(/^www\./, '');
      const siteName = getSiteName(homeUrl.hostname);

      const names = [r.name, repoName, siteName]
        .filter((s) => s.length > 1)
        .map((s) => {
          s = s.toLowerCase();
          return [s, ...guessNames(s)];
        })
        .flat()
        .filter((s) => s.length > 1);

      return {
        repoName,
        repoFullName,
        siteFullName,
        keys: [...new Set(names)],
      };
    })
    .filter(Boolean);

  return repos;
}

function transformLinks(mirrors) {
  return mirrors.map((r) => {
    const url = normalize(r);
    const siteName = getSiteName(url.hostname);

    const names = [siteName]
      .filter((s) => s.length > 1)
      .map((s) => {
        s = s.toLowerCase();
        return [s, ...guessNames(s)];
      })
      .flat()
      .filter((s) => s.length > 1);

    return {
      url: r,
      keySet: new Set(names),
    };
  });
}

async function getLinksByDom(url, selector) {
  const document = await loadDocument(url);
  return [...document.querySelectorAll(selector)].map((a) => a.href);
}

async function searchBing(key) {
  const prefix = 'https://cn.bing.com/search?q=';
  const selector = `a[href^=http]`;

  const url1 = prefix + encodeURIComponent(key);
  const links1 = await getLinksByDom(url1, selector);

  const url2 = prefix + encodeURIComponent('intitle:' + key);
  const links2 = await getLinksByDom(url2, selector);

  const links = [...new Set([...links1, ...links2])].filter(Boolean);

  return links;
}

async function start() {
  console.log('[INFO]: start...');

  console.log('\n[INFO]: Github repos converting...');
  const repos = transformRepos();
  console.log('[INFO]: Github repos converted!');
  // console.log(JSON.stringify(repos, null, 2));

  console.log('\n[INFO]: Mirrors loading and converting...');
  const mirrorList = transformLinks(mirrorJson);
  console.log('[INFO]: Mirrors converted!');
  // console.log(JSON.stringify(mirrorList, null, 2));

  console.log('');

  const INVALID_REG = /^(https?:\/\/)?[^/]*github.io\//i;
  const result = [];
  for (const repo of repos) {
    // const keyReg = new RegExp(repo.keys.join('|'), 'i');
    // const domainReg = new RegExp(repo.siteFullName, 'i');
    // const roughSites = mirrorList.filter((m) => domainReg.test(m.url) || keyReg.test(m.url)).map((m) => m.url);

    const bingLinks = await searchBing(repo.repoName);
    const bingList = transformLinks(bingLinks);

    const exactSites = [...mirrorList, ...bingList]
      .filter((m) => {
        return repo.keys.some((k) => m.keySet.has(k));
      })
      .map((m) => m.url)
      .filter((m) => !INVALID_REG.test(m));

    if (!exactSites.length) continue;

    repoSet.delete('https://github.com/' + repo.repoFullName);
    result.push([repo.repoFullName, ...exactSites]);
    console.log('[INFO]: Found:', repo.repoFullName, exactSites.join());
  }

  console.log('\n[INFO]: 🚀 Done! Found mirror sites:', result.length, result.flat().length - result.length);
  console.log([...repoSet].join('\n'));
}

start().then();
