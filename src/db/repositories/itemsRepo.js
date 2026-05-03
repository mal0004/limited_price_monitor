const db = require('../sqlite');

function addItem(assetId, name = null, strategy = 'hold') {
  const stmt = db.prepare('INSERT OR IGNORE INTO items (asset_id, name, strategy, created_at) VALUES (?, ?, ?, ?)');
  stmt.run(assetId, name, strategy, new Date().toISOString());
}

function removeItem(assetId) {
  db.prepare('DELETE FROM items WHERE asset_id = ?').run(assetId);
}

function setStrategy(assetId, strategy) {
  db.prepare('UPDATE items SET strategy = ? WHERE asset_id = ?').run(strategy, assetId);
}

function listItems() {
  return db.prepare('SELECT * FROM items WHERE enabled = 1 ORDER BY id DESC').all();
}

function getItemByAssetId(assetId) {
  return db.prepare('SELECT * FROM items WHERE asset_id = ?').get(assetId);
}

module.exports = { addItem, removeItem, setStrategy, listItems, getItemByAssetId };
