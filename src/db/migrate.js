const fs = require('fs');
const path = require('path');
const db = require('./sqlite');

function runMigrations() {
  const migrationsDir = path.join(process.cwd(), 'migrations');
  const files = fs.readdirSync(migrationsDir).filter((f) => f.endsWith('.sql')).sort();

  for (const file of files) {
    const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
    db.exec(sql);
  }
}

if (require.main === module) {
  runMigrations();
  console.log('Migrations complete.');
}

module.exports = { runMigrations };
