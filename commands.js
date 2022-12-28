const { botCommandsManager } = require("./botCommandsManager.js");
const { commands } = require("./data.js");

botCommandsManager.setMyCommandsList(commands);
