const { removeItem } = require('../db/repositories/itemsRepo');

module.exports = {
  data: {
    name: 'watch-remove',
    description: 'Remove watched item',
    options: [{ name: 'asset_id', description: 'Roblox asset ID', type: 4, required: true }]
  },
  async execute(interaction) {
    const assetId = interaction.options.getInteger('asset_id', true);
    removeItem(assetId);
    await interaction.reply(`Removed asset ${assetId}.`);
  }
};
