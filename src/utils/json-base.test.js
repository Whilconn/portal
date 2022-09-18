const path = require('path');
const { JsonBase } = require('./json-base');

async function test() {
  const p = path.resolve(__dirname, '1.json');
  const db = new JsonBase(p);

  console.log(await db.find());

  await db.insert([{ a: 22 }]);
  console.log(await db.find());

  await db.insert([{ a: 33 }]);
  console.log(await db.find());

  await db.update([{ a: 112 }, { id: db.docs[0].id, updateTime: Date.now() }]);
  console.log(await db.find());

  console.log(await db.find(null, { groupBy: 'id' }));
  console.log(await db.find(null, { orderBy: 'id', asc: true }));

  await db.remove([{ id: db.docs[1].id }, { id: db.docs[0].id }]);
  console.log(await db.find());
}

test().then();
