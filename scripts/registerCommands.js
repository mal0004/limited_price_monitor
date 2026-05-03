const fs = require('fs');
const path = require('path');
const { REST, Routes } = require('discord.js');
require('../src/config/env');

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.DISCORD_CLIENT_ID;
const guildId = process.env.DISCORD_GUILD_ID;

if (!token || !clientId || !guildId) {
  throw new Error('DISCORD_TOKEN, DISCORD_CLIENT_ID, DISCORD_GUILD_ID are required to register guild commands');
}

const commandsDir = path.join(__dirname, '..', 'src', 'commands');
const commandFiles = fs.readdirSync(commandsDir).filter((f) => f.endsWith('.js'));
const commands = commandFiles.map((file) => require(path.join(commandsDir, file)).data);

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });
  console.log('Guild slash commands registered.');
})();
