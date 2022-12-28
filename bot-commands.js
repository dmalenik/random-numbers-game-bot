const {
  getMyCommandsList,
  deleteMyCommandsList,
  setMyCommandsList,
} = require("./bot-commands-manager.js");
const commands = [
  { command: "start", description: "Start the bot" },
  { command: "greeting", description: "Say hello to the world!" },
  { command: "info", description: "Get info about the user" },
  { command: "game", description: "Start a random numbers game" },
];

setMyCommandsList(commands);

module.exports.commands = commands;
