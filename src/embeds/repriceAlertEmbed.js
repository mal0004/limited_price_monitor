const { EmbedBuilder } = require('discord.js');

function buildRepriceAlertEmbed(item, context, recommendation) {
  return new EmbedBuilder()
    .setTitle(`Repricing Recommendation: ${item.name || item.asset_id}`)
    .setColor(0x00aaff)
    .addFields(
      { name: 'Strategy', value: item.strategy, inline: true },
      { name: 'Observed Best Price (Roblox)', value: String(context.observedPrice ?? 'N/A'), inline: true },
      { name: 'Recommended Price', value: String(recommendation.recommendedPrice ?? 'N/A'), inline: true },
      { name: 'Reason', value: recommendation.reason },
      { name: 'Rolimons RAP', value: String(context.rap ?? 'N/A'), inline: true },
      { name: 'Rolimons Value', value: String(context.value ?? 'N/A'), inline: true },
      { name: 'Demand / Trend', value: `${context.demand ?? 'N/A'} / ${context.trend ?? 'N/A'}`, inline: true },
      { name: 'Projected', value: String(context.projected ?? 'N/A'), inline: true },
      { name: 'Seller Count', value: String(context.sellerCount ?? 'N/A'), inline: true }
    )
    .setFooter({ text: 'Roblox is primary source. Rolimons is context only.' })
    .setTimestamp();
}

module.exports = { buildRepriceAlertEmbed };
