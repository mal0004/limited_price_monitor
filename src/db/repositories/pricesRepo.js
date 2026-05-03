const db = require('../sqlite');

function savePriceSnapshot(itemId, snapshot) {
  db.prepare(
    `INSERT INTO price_history (item_id, observed_price, rap, value, demand, trend, projected, seller_count, observed_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).run(
    itemId,
    snapshot.observedPrice,
    snapshot.rap,
    snapshot.value,
    snapshot.demand,
    snapshot.trend,
    snapshot.projected ? 1 : 0,
    snapshot.sellerCount,
    new Date().toISOString()
  );
}

module.exports = { savePriceSnapshot };
