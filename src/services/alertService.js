const { saveAlert } = require('../db/repositories/alertsRepo');
const { buildRepriceAlertEmbed } = require('../embeds/repriceAlertEmbed');

async function sendAlert(client, channelId, item, context, recommendation) {
  const channel = await client.channels.fetch(channelId);
  if (!channel) return;
  const embed = buildRepriceAlertEmbed(item, context, recommendation);
  await channel.send({ embeds: [embed] });
  saveAlert(item.id, recommendation);
}

module.exports = { sendAlert };
