const { build } = require('./build');
const { validate } = require('./validate');

async function start() {
  await build();
  validate();
}

start().then();
