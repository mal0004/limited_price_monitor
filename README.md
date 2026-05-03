# Limited Price Monitor (Discord Bot)

A beginner-friendly Node.js 20 Discord bot that monitors Roblox Limited public prices and sends **repricing recommendations**.

## What this bot does
- Uses **Roblox public data** as the primary source for observed best price.
- Uses **Rolimon's public data** as secondary valuation context (RAP, value, demand, trend, projected, seller count, best price if available).
- Stores watched items, price history, and alert history in SQLite.
- Sends recommendation alerts via Discord embeds.

## What this bot does NOT do
- No Roblox authentication.
- No Roblox cookies.
- No automated buying/selling.
- No automated price changes.
- It only sends recommendations.

## Requirements
- Node.js 20+
- A Discord bot token and app

## Quick Start (Beginner)
1. Clone the repo.
2. Create `.env` from example:
   ```bash
   cp .env.example .env
   ```
3. Fill `.env` values:
   - `DISCORD_TOKEN`
   - `DISCORD_CLIENT_ID`
   - `DISCORD_GUILD_ID` (for local slash command registration)
4. Install dependencies:
   ```bash
   npm install
   ```
5. Run database migrations:
   ```bash
   npm run migrate
   ```
6. Register slash commands:
   ```bash
   npm run register-commands
   ```
7. Start the bot:
   ```bash
   npm start
   ```

## Slash Commands
- `/ping`
- `/watch-add asset_id:<number> [name] [strategy]`
- `/watch-remove asset_id:<number>`
- `/watch-list`
- `/strategy-set asset_id:<number> strategy:<undercut_safe|hold|aggressive>`
- `/channel-set channel_id:<discord_channel_id>`

## Notes on Data Sources
- Roblox public reseller price endpoint is treated as the immediate pricing signal.
- Rolimon's is context only and should not be treated as guaranteed real-time truth for instant repricing.

## Testing
Run:
```bash
npm test
```

## Project Structure
See `src/` for modular folders: `commands`, `monitoring`, `pricing`, `roblox`, `services`, `db`, `embeds`.
