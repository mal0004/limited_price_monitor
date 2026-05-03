const { listItems } = require('../db/repositories/itemsRepo');

module.exports = {
  data: {
    name: 'watch-list',
    description: 'List watched items',
    options: []
  },
  async execute(interaction) {
    const items = listItems();
    if (items.length === 0) return interaction.reply('No watched items yet.');
    const msg = items.map((i) => `• ${i.asset_id} (${i.strategy})`).join('\n');
    await interaction.reply(msg);
  }
};
