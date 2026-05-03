const { setStrategy } = require('../db/repositories/itemsRepo');

module.exports = {
  data: {
    name: 'strategy-set',
    description: 'Set strategy for a watched item',
    options: [
      { name: 'asset_id', description: 'Roblox asset ID', type: 4, required: true },
      { name: 'strategy', description: 'undercut_safe | hold | aggressive', type: 3, required: true }
    ]
  },
  async execute(interaction) {
    const assetId = interaction.options.getInteger('asset_id', true);
    const strategy = interaction.options.getString('strategy', true);
    setStrategy(assetId, strategy);
    await interaction.reply(`Updated ${assetId} to strategy ${strategy}.`);
  }
};
