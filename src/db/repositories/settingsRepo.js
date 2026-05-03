const db = require('../sqlite');

function setSetting(key, value) {
  db.prepare('INSERT INTO bot_settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value').run(key, String(value));
}

function getSetting(key) {
  const row = db.prepare('SELECT value FROM bot_settings WHERE key = ?').get(key);
  return row ? row.value : null;
}

module.exports = { setSetting, getSetting };
