const { Bot } = require("grammy");
const { token } = require("./data.js");
const bot = new Bot(token);

module.exports.bot = bot;
