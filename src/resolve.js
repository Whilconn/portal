const jsdom = require('jsdom');
const { httpGet } = require('./request');
const { getFavicon } = require('./favicon');

const SEP = '/';
const GH = 'https://github.com/';

async function loadDocument(url) {
  const html = await httpGet(url);
  const dom = new jsdom.JSDOM(html);
  return dom.window.document;
}

function splitPath(pathname) {
  return pathname.split(SEP).filter(Boolean);
}

async function resolveByHomepage(url) {
  const N = 2;
  const document = await loadDocument(url);
  const nodes = [...document.querySelectorAll(`a[href^='${GH}']`)];

  let linkNode = nodes.find((n) => splitPath(n.pathname).length === N);

  if (!linkNode) {
    linkNode = nodes.find((n) => splitPath(n.pathname).length > N);
  }

  const repository = linkNode ? [linkNode.origin, ...splitPath(linkNode.pathname).slice(0, N)].join(SEP) : '';

  const desc = document.title;

  const domain = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  const icon = await getFavicon(domain);

  return { desc, icon, homepage: url, repository };
}

async function resolveByRepo(url) {
  const api = 'https://api.github.com/repos/';
  const repoInfo = await httpGet(url.replace(GH, api));
  const homepage = repoInfo?.homepage;

  const res = homepage ? await resolveByHomepage(homepage) : {};

  return { ...res, repository: url };
}

/**
 * @example
 * resolveByRepo("https://github.com/vuejs/core").then(JSON.stringify).then(console.log);
 * resolveByHomepage("https://vuejs.org/").then(JSON.stringify).then(console.log);
 */

module.exports = {
  resolveByRepo,
  resolveByHomepage,
};
