const mirrorJson = require('./mirrors.json');
const ghRepos = require('./repos.json');
const { httpGet } = require('../../utils/request');
const { loadDocument } = require('../../utils/dom-util');

const exactMirrors = [
  'https://cn.rx.js.org/',
  'https://postcss.docschina.org/',
  'https://ramda.cn/',
  'https://www.gulpjs.com.cn/',
  'https://assemblyscript.bootcss.com/',
  'https://babel.docschina.org/',
  'https://browsersync.bootcss.com/',
  'https://chartjs.bootcss.com/',
  'https://cn.eslint.org/',
  'https://cn.mobx.js.org/',
  'https://cn.redux.js.org/',
  'https://cra.docschina.org/',
  'https://create-react-app.bootcss.com/',
  'https://ejs.bootcss.com/',
  'https://formik.bootcss.com/',
  'https://grunt.docschina.org/',
  'https://infima.bootcss.com/',
  'https://jest.docschina.org/',
  'https://koajs.docschina.org/',
  'https://less.bootcss.com/',
  'https://liquid.bootcss.com/',
  'https://localforage.docschina.org/',
  'https://manual.deno.js.cn/',
  'https://mochajs.bootcss.com/',
  'https://momentjs.bootcss.com/',
  'https://nestjs.bootcss.com/',
  'https://nunjucks.bootcss.com/',
  'https://parceljs.docschina.org/',
  'https://playwright.bootcss.com/',
  'https://floating-ui.com/',
  'https://prisma.bootcss.com/',
  'https://puppeteer.bootcss.com/',
  'https://react.docschina.org/',
  'https://reactnative.cn/',
  'https://rematchjs.bootcss.com/',
  'https://remotion.bootcss.com/',
  'https://rust.bootcss.com/',
  'https://semver.bootcss.com/',
  'https://socketio.bootcss.com/',
  'https://stylelint.bootcss.com/',
  'https://stylelint.docschina.org/',
  'https://swr.bootcss.com/',
  'https://tippyjs.bootcss.com/',
  'https://typeorm.bootcss.com/',
  'https://typescript.bootcss.com/',
  'https://webpack.docschina.org/',
  'https://www.alpinejs.cn/',
  'https://www.axios-http.cn/',
  'https://www.babeljs.cn/',
  'https://www.blitzjs.cn/',
  'https://www.cssnano.cn/',
  'https://www.denojs.cn/',
  'https://www.docusaurus.cn/',
  'https://www.eslint.com.cn/',
  'https://www.expressjs.com.cn/',
  'https://www.fastify.cn/',
  'https://www.gatsbyjs.cn/',
  'https://www.gohugo.cn/',
  'https://www.gridsome.cn/',
  'https://www.gruntjs.net/',
  'https://www.handlebarsjs.cn/',
  'https://www.jekyll.com.cn/',
  'https://www.jestjs.cn/',
  'https://www.jsdoc.com.cn/',
  'https://www.lernajs.cn/',
  'https://www.mdxjs.cn/',
  'https://www.miragejs.cn/',
  'https://www.mongoosejs.cn/',
  'https://www.nextjs.cn/',
  'https://www.npmjs.cn/',
  'https://www.nuxtjs.cn/',
  'https://www.parceljs.cn/',
  'https://www.pnpm.cn/',
  'https://www.postcss.com.cn/',
  'https://www.preactjs.com.cn/',
  'https://www.prettier.cn/',
  'https://www.pugjs.cn/api/getting-started.html',
  'https://www.purgecss.cn/',
  'https://www.react-bootstrap.cn/',
  'https://www.recoiljs.cn/',
  'https://www.reduxjs.cn/',
  'https://www.romejs.cn/',
  'https://www.sasscss.com/',
  'https://www.sequelize.cn/',
  'https://www.stylus-lang.cn/',
  'https://www.sveltejs.cn/',
  'https://www.tailwindcss.cn/',
  'https://www.typedoc.cn/',
  'https://www.underscorejs.cn/',
  'https://www.webpackjs.com/',
  'https://www.yarnpkg.cn/',
  'https://yarn.bootcss.com/',
  'https://zeptojs.bootcss.com/',
];

// from: https://docschina.org/ $$('a.dc-card-home').map(a=>a.href)
// from: https://www.bootcss.com/ $$('.thumbnail>a').map(a=>a.href)
async function loadMirrors() {
  const mirrors = [];

  async function getLinksByDom(url, selector) {
    const document = await loadDocument(url);
    return [...document.querySelectorAll(selector)].map((a) => a.href);
  }

  const sites = [
    ['https://docschina.org/', 'a.dc-card-home'],
    ['https://www.bootcss.com/', '.thumbnail>a'],
  ];

  for (const site of sites) {
    const links = await getLinksByDom(...site);
    mirrors.push(...links);
  }

  return mirrors;
}

async function filterCNSites(mirrors) {
  mirrors.sort();
  const list = [];
  for (let m of mirrors) {
    m = m.replace(/^http:/, 'https:');
    console.log(m);
    const res = await httpGet(m);
    if (res && /[^\x00-\xff]/.test(res)) list.push(m);
  }

  console.log('🚀', list.length, mirrors.length);
  console.log(JSON.stringify(list, null, 2));
}

function getNameFromUrl(url) {
  return new URL(url).host
    .replace(/^(www|cn)\./gi, '')
    .replace(/\.(bootcss|docschina)/gi, '')
    .replace(/\.(dev|io|js|es)$/gi, '')
    .replace(/\.(cn|com|org)/gi, '');
}

function mirrorsToMap22(mirrors) {
  const res = mirrors.reduce((acc, cur) => {
    const key = getNameFromUrl(cur);

    if (!acc[key]) acc[key] = [];
    acc[key].push(cur);
    return acc;
  }, {});

  console.log(mirrors.length, Object.values(res).flat().length);
  console.log(JSON.stringify(res, null, 2));

  return res;
}

const GH_REG = /^(https?:)?\/\/(www.)?github.com\//;

function repoToSet() {
  return repos.reduce((set, cur) => {
    return set.add(cur.repository.replace(GH_REG, ''));
  }, new Set());
}

async function mirrorsToMap(mirrors) {
  const map = {};
  const repoSet = repoToSet();

  for (const url of mirrors) {
    console.log(url);

    const document = await loadDocument(url);

    const nodes = [...document.querySelectorAll(`a[href*='github.com']`)];
    const ghNames = nodes
      .filter((n) => /github/i.test(n.outerHTML.replace(n.href, '')))
      .map((l) => {
        const href = l.href.replace(GH_REG, '');
        const m = href.match(/[^/]+\/[^/]+/);
        return m && m[0];
      })
      .filter(Boolean);

    const siteName = getNameFromUrl(url);

    const key = ghNames.find((g) => repoSet.has(g)) || siteName;

    if (!map[key]) map[key] = [];
    map[key].push(url);
  }

  console.log('🚀', mirrors.length, Object.values(map).flat().length);
  console.log(JSON.stringify(map, null, 2));

  return map;
}
