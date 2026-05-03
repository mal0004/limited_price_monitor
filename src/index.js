const { readEnv } = require('./config/env');
const { runMigrations } = require('./db/migrate');
const { createClient } = require('./bot/client');
const { loadCommands } = require('./bot/commandLoader');
const { wireInteractionHandler } = require('./bot/eventHandlers/interactionCreate');
const { startMonitor } = require('./monitoring/monitorRunner');
const logger = require('./utils/logger');

async function main() {
  const env = readEnv();
  runMigrations();

  const client = createClient();
  const commands = loadCommands();
  wireInteractionHandler(client, commands);

  client.once('ready', () => {
    logger.info('Discord bot ready', { user: client.user.tag });
    startMonitor(client, env);
  });

  await client.login(env.discordToken);
}

main().catch((err) => {
  logger.error('Fatal startup error', { error: err.message });
  process.exit(1);
});
