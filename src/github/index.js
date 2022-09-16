const { build } = require('./build');
const { validate } = require('./validate');

async function start() {
  const portalGroups = await build();
  validate(portalGroups);
}

start().then();
