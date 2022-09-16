const jsdom = require('jsdom');
const { httpGet } = require('./request');

async function loadDocument(url) {
  const html = await httpGet(url);
  const dom = new jsdom.JSDOM(html);
  return dom.window.document;
}

module.exports = { loadDocument };
