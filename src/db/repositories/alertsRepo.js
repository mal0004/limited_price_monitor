const db = require('../sqlite');

function getLastAlert(itemId) {
  return db.prepare('SELECT * FROM alerts WHERE item_id = ? ORDER BY id DESC LIMIT 1').get(itemId);
}

function saveAlert(itemId, recommendation) {
  db.prepare(
    'INSERT INTO alerts (item_id, recommendation_type, recommended_price, reason, fingerprint, sent_at) VALUES (?, ?, ?, ?, ?, ?)'
  ).run(
    itemId,
    recommendation.type,
    recommendation.recommendedPrice,
    recommendation.reason,
    recommendation.fingerprint,
    new Date().toISOString()
  );
}

module.exports = { getLastAlert, saveAlert };
