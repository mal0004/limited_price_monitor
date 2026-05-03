CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  asset_id INTEGER NOT NULL UNIQUE,
  name TEXT,
  strategy TEXT NOT NULL DEFAULT 'hold',
  enabled INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS bot_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS price_history (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  item_id INTEGER NOT NULL,
  observed_price INTEGER,
  rap INTEGER,
  value INTEGER,
  demand TEXT,
  trend TEXT,
  projected INTEGER,
  seller_count INTEGER,
  observed_at TEXT NOT NULL,
  FOREIGN KEY(item_id) REFERENCES items(id)
);

CREATE TABLE IF NOT EXISTS alerts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  item_id INTEGER NOT NULL,
  recommendation_type TEXT NOT NULL,
  recommended_price INTEGER,
  reason TEXT,
  fingerprint TEXT,
  sent_at TEXT NOT NULL,
  FOREIGN KEY(item_id) REFERENCES items(id)
);
