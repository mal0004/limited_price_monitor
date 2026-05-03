const { setSetting } = require('../db/repositories/settingsRepo');

module.exports = {
  data: {
    name: 'channel-set',
    description: 'Set alert channel for recommendations',
    options: [{ name: 'channel_id', description: 'Discord channel ID', type: 3, required: true }]
  },
  async execute(interaction) {
    const channelId = interaction.options.getString('channel_id', true);
    setSetting('alert_channel_id', channelId);
    await interaction.reply(`Alert channel set to ${channelId}.`);
  }
};
