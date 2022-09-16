const jsdom = require('jsdom');
const { httpGet } = require('./request');
const { getFavicon } = require('./favicon');

async function loadDocument(url) {
  const html = await httpGet(url);
  const dom = new jsdom.JSDOM(html);
  return dom.window.document;
}

async function crawlHomepage(url) {
  const document = await loadDocument(url);
  const descNode = document.querySelector('meta[name="description"]');

  return { homepage: url, desc: descNode?.content || document.title, icon: url + '/favicon.ico' };
}

/**
 * @example
 * crawlHomepage("https://vuejs.org/").then(JSON.stringify).then(console.log);
 */

module.exports = { crawlHomepage };
