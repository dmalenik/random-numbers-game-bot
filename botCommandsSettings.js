const {
  setMyCommandsList,
  deleteMyCommandsList,
} = require("./botCommandsManager.js");
const { commands } = require("./data.js");

setMyCommandsList(commands);
