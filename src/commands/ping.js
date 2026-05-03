module.exports = {
  data: {
    name: 'ping',
    description: 'Check if bot is alive',
    options: []
  },
  async execute(interaction) {
    await interaction.reply('Pong!');
  }
};
