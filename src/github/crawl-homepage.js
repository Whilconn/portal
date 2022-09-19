const { crawlFavicon } = require('./crawl-favicon');
const { loadDocument } = require('../utils/dom-util');

const HTTP = 'http://';
const HTTPS = 'https://';

async function crawlHomepage(homepage) {
  // 补全链接协议
  if (!/^https?:\/\//.test(homepage)) homepage = HTTP + homepage;

  let document;
  try {
    document = await loadDocument(homepage);
  } catch (err) {
    console.error('[ERROR]:', err.message);
  }

  if (!document && homepage.startsWith(HTTP)) {
    homepage = homepage.replace(HTTP, HTTPS);
    document = await loadDocument(homepage);
  }

  const descNode = document.querySelector('meta[name="description"]');
  const icon = await crawlFavicon(homepage, document);

  return { desc: descNode?.content || document.title, icon };
}

/**
 * @example
 * crawlHomepage("https://vuejs.org/").then(JSON.stringify).then(console.log);
 */
module.exports = { crawlHomepage };
