const { crawlRepo } = require('./crawl-repo');
const { crawlHomepage } = require('./crawl-homepage');
const { JsonBase } = require('../utils/json-base');

async function updateAllRepos() {
  console.log(`[${arguments.callee.name}]: processing...\n`);

  const db = new JsonBase(__dirname, './data/repos.json');
  const repoList = await db.find();
  await updateRepos(db, repoList);

  console.log(`\n Updated file: ${db.filePath}, affected records: ${repoList.length}.`);
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

    console.log(`[${sourceRepo.name}] crawl homepage: ${homepage} ...`);
    let siteInfo = {};
    try {
      const origin = new URL(homepage).origin;
      if (homepage && !origin.includes('github.')) {
        siteInfo = await crawlHomepage(homepage);
      }
    } catch (e) {
      console.error('[ERROR]', e.stack);
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
