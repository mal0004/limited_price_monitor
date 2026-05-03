function wireInteractionHandler(client, commands) {
  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    const command = commands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (err) {
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp('Error running command.');
      } else {
        await interaction.reply('Error running command.');
      }
      console.error(err);
    }
  });
}

module.exports = { wireInteractionHandler };
