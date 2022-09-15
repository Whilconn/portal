const fs = require('fs');
const path = require('path');
const { resolveByRepo, resolveByHomepage } = require('./resolve');
const { portalGroups } = require('./data/portals');

async function build() {
  console.log(`[${arguments.callee.name}]: processing...\n`);

  for (const group of portalGroups) {
    const list = group.list;
    group.list = [];
    for (const portal of list) {
      console.log(`处理: ${portal.name} ...`);

      let info;
      if (portal.repository) info = await resolveByRepo(portal.repository);
      else info = await resolveByHomepage(portal.homepage);

      group.list.push({
        ...portal,
        ...info,
        desc: portal.desc || info.desc,
        mirrors: portal.mirrors,
      });
    }
  }

  const file = path.resolve(__dirname, 'data/portal-new.json');
  fs.writeFileSync(file, JSON.stringify(portalGroups, null, 4), 'utf8');

  console.log(`\n[${arguments.callee.name}]: 🚀 Done!`);
}

module.exports = { build };
