const { addItem } = require('../db/repositories/itemsRepo');

module.exports = {
  data: {
    name: 'watch-add',
    description: 'Add Roblox limited item to monitor',
    options: [
      { name: 'asset_id', description: 'Roblox asset ID', type: 4, required: true },
      { name: 'name', description: 'Optional item name', type: 3, required: false },
      { name: 'strategy', description: 'undercut_safe | hold | aggressive', type: 3, required: false }
    ]
  },
  async execute(interaction) {
    const assetId = interaction.options.getInteger('asset_id', true);
    const name = interaction.options.getString('name');
    const strategy = interaction.options.getString('strategy') || 'hold';
    addItem(assetId, name, strategy);
    await interaction.reply(`Added asset ${assetId} with strategy ${strategy}.`);
  }
};
