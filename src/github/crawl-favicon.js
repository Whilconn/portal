const { rawAxios } = require('../utils/request');
const { loadDocument } = require('../utils/dom-util');

async function loadFavicon(iconLink, toBase64) {
  const icon = await rawAxios(iconLink, { responseType: 'arraybuffer' })
    .then((res) => {
      if (!res.headers['content-type']?.includes('image')) return [];
      return res.data;
    })
    .catch((err) => {
      console.warn('[WARNING]: Attempt to request favicon failed!', err.config.url);
    });

  if (!icon?.length) return '';
  if (!toBase64) return iconLink;

  const b64 = Buffer.from(icon).toString('base64');

  return 'data:image/png;base64,' + b64;
}

async function crawlFavicon(homepage, document) {
  if (!document) document = await loadDocument(homepage);

  const links = ['/favicon.ico'];
  document.querySelectorAll('link[rel*="icon"]').forEach((n) => {
    if (n.href) links.push(n.href);
  });
  document.querySelectorAll('img[src*="logo"]').forEach((n) => {
    if (n.src) links.push(n.src);
  });

  for (let l of links) {
    if (!/^https?:/.test(l)) l = new URL(l, homepage).href;
    const res = await loadFavicon(l);
    if (res) return res;
  }

  return '';
}

/**
 * @example
 * crawlFavicon('http://iview.talkingdata.com').then(console.log);
 * crawlFavicon('https://vuejs.org/').then(console.log);
 */
module.exports = { crawlFavicon };
