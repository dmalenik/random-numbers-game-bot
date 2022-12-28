const { bot } = require("./bot.js");
const { commands } = require("./data.js");
const { botCommandsHandlers } = require("./botCommandsHandlers.js");

const [start, greeting, info, game] = commands;

bot.command(start.command, (ctx) => botCommandsHandlers.handleStart(ctx));
bot.command(info.command, (ctx) => botCommandsHandlers.handleInfo(ctx));

bot.start();
