const { httpGet } = require('./request');

// reference https://www.xinac.net/9012.html
const API_LIST = [
  'https://api.qqsuu.cn/api/get?url=',
  'https://api.xinac.net/icon/?url=',
  'https://favicon.yandex.net/favicon/',
  'https://f.ydr.me/',
  'https://api.byi.pw/favicon/?url=',
  'https://favicon.link/',
  'http://favicon.cccyun.cc/',
  'https://statics.dnspod.cn/proxy_favicon/_/favicon?domain=',
];

async function loadFaviconB64(api, domain) {
  const icon = await httpGet(api + domain, { responseType: 'arraybuffer' });
  if (!icon?.length) return null;

  const prefix = 'data:image/png;base64,';
  const b64 = Buffer.from(icon).toString('base64');

  return prefix + b64;
}

async function getFavicon(domain) {
  for (const api of API_LIST) {
    const icon = await loadFaviconB64(api, domain);
    if (icon) return icon;
  }

  throw new Error('favicon 服务不可用');
}

/**
 * @example
 * getFavicon("juejin.cn").then(console.log);
 */
module.exports = { getFavicon };
