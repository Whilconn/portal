const fs = require('fs');
const { resolveByRepo, resolveByHomepage } = require('./resolve');
const { portalGroups } = require('./portals');

async function start() {
  for (const group of portalGroups.reverse()) {
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

  fs.writeFileSync('./1.json', JSON.stringify(portalGroups, null, 4), 'utf8');
  console.log('🚀 DONE!');
}

start().then();
