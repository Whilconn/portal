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
  const s1 = 'link[rel~="icon"],link[href~="favicon"],img[src~="favicon"]';
  document.querySelectorAll(s1).forEach((n) => links.push(n.href || n.src));

  const s2 = 'link[href*="favicon"],img[src*="favicon"],link[rel*="icon"],link[href*="logo"],img[src*="logo"]';
  document.querySelectorAll(s2).forEach((n) => links.push(n.href || n.src));

  let baseUrl = homepage;
  const base = document.querySelector('base');
  if (base?.href) baseUrl = new URL(base.href.replace(homepage, ''), homepage).href;

  for (let l of links) {
    if (!l) continue;

    // 相对路径转完整链接
    if (!/^https?:/.test(l)) l = new URL(l, baseUrl).href;

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
