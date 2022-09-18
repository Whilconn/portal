const { updateAllRepos } = require('./update-repos');
const { validateRepos } = require('./validate-repos');

async function start() {
  const repos = await updateAllRepos();
  validateRepos(repos);
}

start().then();
