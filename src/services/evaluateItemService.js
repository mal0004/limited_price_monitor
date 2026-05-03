const { getMarketContext } = require('./marketDataService');
const { savePriceSnapshot } = require('../db/repositories/pricesRepo');
const { getLastAlert } = require('../db/repositories/alertsRepo');
const { getRecommendation } = require('../pricing/recommendationEngine');
const { canSendAlert } = require('../monitoring/cooldownGate');
const { sendAlert } = require('./alertService');

async function evaluateItem(client, item, env, alertChannelId) {
  const context = await getMarketContext(item.asset_id, env.rolimonsTtlMs);
  savePriceSnapshot(item.id, context);

  const recommendation = getRecommendation(item.strategy, context);
  if (!recommendation) return;

  const last = getLastAlert(item.id);
  if (!canSendAlert(last, recommendation, env.alertCooldownMs)) return;

  if (alertChannelId) {
    await sendAlert(client, alertChannelId, item, context, recommendation);
  }
}

module.exports = { evaluateItem };
