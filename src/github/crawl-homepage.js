const { crawlFavicon } = require('./crawl-favicon');
const { loadDocument } = require('../utils/dom-util');

async function crawlHomepage(homepage) {
  const document = await loadDocument(homepage);
  const descNode = document.querySelector('meta[name="description"]');
  const icon = await crawlFavicon(homepage, document);

  return { desc: descNode?.content || document.title, icon };
}

/**
 * @example
 * crawlHomepage("https://vuejs.org/").then(JSON.stringify).then(console.log);
 */
module.exports = { crawlHomepage };
