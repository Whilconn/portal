const fs = require('fs');
const path = require('path');
const { crawlRepo } = require('./crawl-repo');
const { crawlHomepage } = require('./crawl-homepage');
const { portalGroups } = require('./data/portals');

async function build() {
  console.log(`[${arguments.callee.name}]: processing...\n`);

  for (const group of portalGroups) {
    const list = group.list;
    group.list = [];
    for (const portal of list) {
      console.log(`处理: ${portal.name} ...`);

      let repoInfo = {};
      try {
        repoInfo = await crawlRepo(portal.repository);
      } catch (e) {
        console.error('[ERROR]', e.stack);
      }

      const homepage = repoInfo.homepage || portal.homepage || '';
      let siteInfo = {};

      try {
        const origin = new URL(homepage).origin;
        if (homepage && !origin.includes('github.')) {
          siteInfo = await crawlHomepage(homepage);
        }
      } catch (e) {
        console.error('[ERROR]', e.stack);
      }

      group.list.push({
        ...portal,
        ...repoInfo,
        homepage,
        icon: siteInfo.icon || portal.icon || '',
        desc: portal.desc || siteInfo.desc || repoInfo.desc || '',
        mirrors: portal.mirrors || [],
      });
    }
  }

  const file = path.resolve(__dirname, '../../ignore/portal-new.json');
  fs.writeFileSync(file, JSON.stringify(portalGroups, null, 4), 'utf8');

  console.log(`\n Generated file: ${file}`);
  console.log(`\n[${arguments.callee.name}]: 🚀 Done!`);

  return portalGroups;
}

module.exports = { build };
