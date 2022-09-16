const axios = require('axios');

axios.defaults.timeout = 10 * 1000;

const ax = axios.create();
ax.interceptors.response.use(
  // 2xx 范围内的状态码都会触发该函数。
  (r) => r.data,

  // 超出 2xx 范围的状态码都会触发该函数
  (e) => {
    console.error('[ERROR]', e.message, e.config.url);
    if (e.stack) console.error(e.stack);
  },
);

const rawAxios = axios.create();

module.exports = { rawAxios, httpGet: ax.get };
