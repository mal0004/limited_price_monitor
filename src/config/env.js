const required = ["DISCORD_TOKEN", "DISCORD_CLIENT_ID"];

function readEnv() {
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }

  return {
    discordToken: process.env.DISCORD_TOKEN,
    discordClientId: process.env.DISCORD_CLIENT_ID,
    discordGuildId: process.env.DISCORD_GUILD_ID || null,
    defaultAlertChannelId: process.env.DEFAULT_ALERT_CHANNEL_ID || null,
    monitorIntervalMs: Number(process.env.MONITOR_INTERVAL_MS || 60000),
    alertCooldownMs: Number(process.env.ALERT_COOLDOWN_MS || 300000),
    rolimonsTtlMs: Number(process.env.ROLIMONS_TTL_MS || 300000)
  };
}

module.exports = { readEnv };
