const { crawlRepo } = require('./crawl-repo');
const { crawlHomepage } = require('./crawl-homepage');
const { JsonBase } = require('../utils/json-base');

async function updateAllRepos() {
  console.log(`[${arguments.callee.name}]: processing...\n`);

  const db = new JsonBase(__dirname, './data/repos.json');
  const repoList = await db.find();
  await updateRepos(db, repoList);

  console.log(`\nUpdated file: ${db.filePath}, affected records: ${repoList.length}.`);
  console.log(`\n[${arguments.callee.name}]: 🚀 Done!`);

  return await db.find();
}

async function updateRepos(db, repoList) {
  for (const sourceRepo of repoList) {
    console.log(`[${sourceRepo.name}] crawl repo: ${sourceRepo.repository}...`);

    let ghInfo = {};
    try {
      ghInfo = await crawlRepo(sourceRepo.repository);
    } catch (e) {
      console.error('[ERROR]', e.stack);
    }

    const homepage = ghInfo.homepage || sourceRepo.homepage || '';
    const sites = [homepage, ...(sourceRepo.mirrors || [])].filter(Boolean);
    let siteInfo = {};

    console.log(`[${sourceRepo.name}] crawl homepage: ${homepage} ...`);
    for (const site of sites) {
      if (['desc', 'icon'].every((k) => siteInfo.hasOwnProperty(k) && siteInfo[k])) break;

      try {
        siteInfo = await crawlHomepage(site);
      } catch (e) {
        console.error('[ERROR]', e.stack);
      }
    }

    const newRepo = {
      ...ghInfo,
      homepage,
      id: sourceRepo.id,
      icon: siteInfo.icon || sourceRepo.icon || '',
      desc: sourceRepo.desc || siteInfo.desc || ghInfo.desc || '',
      mirrors: sourceRepo.mirrors || [],
      tags: sourceRepo.tags || [],
    };

    console.log(`[${sourceRepo.name}] update repo: ${newRepo.id} ...`);
    await db.update([newRepo]);
  }
}

module.exports = { updateAllRepos };
