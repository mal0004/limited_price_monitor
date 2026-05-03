const fs = require('fs');
const path = require('path');

function loadCommands() {
  const dir = path.join(__dirname, '..', 'commands');
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.js'));
  const commands = new Map();
  for (const file of files) {
    const command = require(path.join(dir, file));
    commands.set(command.data.name, command);
  }
  return commands;
}

module.exports = { loadCommands };
