const { bot } = require("./bot.js");
const { gameOptions } = require("./game.js");
const { commands } = require("./data.js");
const { handlers } = require("./logic.js");
const { DB } = require("./DB.js");

const [start, info, game] = commands;
const { handleStart, handleInfo, handleDefault, handleGame } = handlers;

bot.on("::bot_command", (ctx) => {
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

bot.start();
