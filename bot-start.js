const { bot } = require("./bot.js");
const { gameOptions } = require("./gameOptions.js");
const { commands } = require("./data.js");
const { botCommandsHandlers } = require("./botCommandsHandlers.js");
const { DB } = require("./DB.js");

const [start, info, game] = commands;
const { handleStart, handleInfo, handleDefault, handleGame } =
  botCommandsHandlers;

bot.on(["::bot_command"], (ctx) => {
  let text = ctx.message.text;
  let chatId = ctx.chat.id;

  switch (text) {
    case `/${start.command}`:
      handleStart(ctx, chatId);
      break;
    case `/${game.command}`:
      handleGame(ctx, chatId, gameOptions, DB);
      break;
    case `/${info.command}`:
      handleInfo(ctx);
      break;
    default:
      handleDefault(ctx);
  }
});
bot.on("message", (ctx) => handleDefault(ctx));

bot.start();
