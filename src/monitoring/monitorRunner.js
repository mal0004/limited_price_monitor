const { listItems } = require('../db/repositories/itemsRepo');
const { getSetting } = require('../db/repositories/settingsRepo');
const { evaluateItem } = require('../services/evaluateItemService');
const logger = require('../utils/logger');

function startMonitor(client, env) {
  setInterval(async () => {
    const items = listItems();
    const channelId = getSetting('alert_channel_id') || env.defaultAlertChannelId;

    for (const item of items) {
      try {
        await evaluateItem(client, item, env, channelId);
      } catch (err) {
        logger.error('Failed to evaluate item', { assetId: item.asset_id, error: err.message });
      }
    }
  }, env.monitorIntervalMs);

  logger.info('Monitor started', { intervalMs: env.monitorIntervalMs });
}

module.exports = { startMonitor };
