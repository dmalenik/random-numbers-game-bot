const {
  setMyCommandsList,
  deleteMyCommandsList,
} = require("./commandsManager.js");
const { commands } = require("./data.js");

setMyCommandsList(commands);
