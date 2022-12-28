const { bot } = require("./bot.js");
const getMyCommandsList = async () => {
  let response = await bot.api.getMyCommands();
  let myCommandsList = JSON.parse(JSON.stringify(response));

  console.log(myCommandsList);
};
const deleteMyCommandsList = async () => {
  let response = await bot.api.deleteMyCommands();
  let state = JSON.parse(JSON.stringify(response));

  console.log(state);
};
const setMyCommandsList = async (commands) => {
  let response = await bot.api.setMyCommands(commands);
  let myCommands = JSON.parse(JSON.stringify(response));

  console.log(myCommands);
};

module.exports.getMyCommandsList = getMyCommandsList;
module.exports.deleteMyCommandsList = deleteMyCommandsList;
module.exports.setMyCommandsList = setMyCommandsList;
