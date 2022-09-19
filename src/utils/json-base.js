const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const UTF8 = 'utf8';

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function createDoc(obj) {
  return { ...obj, id: uuidv4(), creatTime: Date.now(), updateTime: Date.now() };
}

class JsonBase {
  docs;
  filePath;

  constructor(...paths) {
    if (!paths?.length) throw new Error('File path is empty!');
    if (!path.isAbsolute(paths[0])) throw new Error(`Relative path is not surported! ${paths[0]}`);

    this.filePath = path.resolve(...paths);
    this.docs = this.#load();
    console.log('[JsonBase]: File loaded, path: ', this.filePath);
  }

  // private
  #load() {
    if (!fs.existsSync(this.filePath)) return [];
    const content = fs.readFileSync(this.filePath, UTF8);
    if (!content) return [];

    const json = JSON.parse(content);
    if (!Array.isArray(json)) throw new Error(`Documents should be json array!`);

    json.forEach((v) => (v.id = v.id || uuidv4()));

    return json;
  }

  // private
  async #store() {
    return fsp.writeFile(this.filePath, JSON.stringify(this.docs, null, 2), UTF8);
  }

  // 仅ID查询或全查
  async find(queryDocs = [], options = {}) {
    const { groupBy, orderBy, asc } = options;

    let docs = [];
    if (!queryDocs?.length) {
      docs = [...this.docs];
    } else {
      const idSet = new Set(queryDocs.map((v) => v.id));
      docs = this.docs.filter((v) => idSet.has(v.id));
    }

    if (orderBy) {
      const k = orderBy;
      docs.sort((a, b) => {
        const sign = Math.sign(+!!asc - 0.5);
        return sign * (a[k] > b[k] ? 1 : -1);
      });
    }

    if (groupBy) {
      const map = docs.reduce((map, cur) => {
        const key = cur[groupBy];
        if (!map.get(key)) map.set(key, []);
        map.get(key).push(cur);
        return map;
      }, new Map());

      docs = [...map.values()];
    }

    return deepClone(docs);
  }

  async insert(docs = []) {
    if (!Array.isArray(docs)) throw new Error('Docs shoud be Array!');

    docs = deepClone(docs);
    this.docs.push(...docs.map((v) => createDoc(v)));

    await this.#store();
  }

  // 仅通过ID更新，ID不存在则写入
  async update(updateDocs = []) {
    if (!Array.isArray(updateDocs)) throw new Error('Docs shoud be Array!');

    updateDocs = deepClone(updateDocs);

    const docMap = this.docs.reduce((map, cur) => {
      return map.set(cur.id, cur);
    }, new Map());

    updateDocs.forEach((v) => {
      const sourceDoc = docMap.get(v.id);
      if (!v.id || !sourceDoc) v = createDoc(v);

      const mergedDoc = sourceDoc ? { ...sourceDoc, ...v } : v;
      docMap.set(v.id, { ...mergedDoc, createTime: mergedDoc.createTime || Date.now(), updateTime: Date.now() });
    });

    this.docs = [...docMap.values()];

    await this.#store();
  }

  async remove(docs = []) {
    if (!Array.isArray(docs)) throw new Error('Docs shoud be Array!');

    const idSet = new Set(docs.map((v) => v.id));
    this.docs = this.docs.filter((v) => !idSet.has(v.id));

    await this.#store();
  }
}

module.exports = { JsonBase };
