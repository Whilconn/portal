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

      const repoInfo = await crawlRepo(portal.repository);
      const siteInfo = { icon: '', desc: '' } || (await crawlHomepage(repoInfo.homepage || portal.homepage));

      group.list.push({
        ...portal,
        ...repoInfo,
        homepage: repoInfo.homepage || siteInfo.homepage || portal.homepage,
        icon: siteInfo.icon || portal.icon,
        desc: portal.desc || siteInfo.desc || repoInfo.desc,
        mirrors: portal.mirrors,
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
