const { bot } = require("./bot.js");

module.exports.botCommandsManager = {
  getMyCommandsList: async function getMyCommandsList() {
    let response = await bot.api.getMyCommands();
    let myCommandsList = JSON.parse(JSON.stringify(response));

    console.log(myCommandsList);
  },
  deleteMyCommandsList: async function deleteMyCommandsList() {
    let response = await bot.api.deleteMyCommands();
    let state = JSON.parse(JSON.stringify(response));

    console.log(state);
  },
  setMyCommandsList: async function setMyCommandsList(commands) {
    let response = await bot.api.setMyCommands(commands);
    let myCommands = JSON.parse(JSON.stringify(response));

    console.log(myCommands);
  },
};
