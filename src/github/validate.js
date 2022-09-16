const { portalGroups } = require('./data/portals');

function validate() {
  console.log(`[${arguments.callee.name}]: processing...\n`);

  let total = 0;
  let errCount = 0;
  for (const group of portalGroups) {
    const list = group.list;

    for (const portal of list) {
      total++;
      const { name, repository, homepage } = portal;

      const nm = name.replace(/[-.\s]/g, '');
      const repo = repository.replace(/[-.]/g, '');
      const home = homepage.replace(/[-.]/g, '');
      const reg = new RegExp(nm, 'i');

      if (!reg.test(repo) && !reg.test(home)) {
        errCount++;
        console.log(name, repository, homepage);
      }
    }
  }

  console.log(`\n[${arguments.callee.name}]: 🚀 Done! Invalid/Total: ${errCount}/${total}.`);
}

module.exports = { validate };
