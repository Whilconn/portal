const axios = require('axios');

axios.defaults.timeout = 10 * 1000;
axios.interceptors.response.use(
  (r) => {
    // 2xx 范围内的状态码都会触发该函数。
    return r.data;
  },
  (e) => {
    // 超出 2xx 范围的状态码都会触发该函数
    console.log('[ERROR]', e.message, e.config.url);
    if (e.stack) console.error(e.stack);
  },
);

module.exports = { httpGet: axios.get };
