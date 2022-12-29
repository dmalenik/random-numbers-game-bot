const { bot } = require("./bot.js");
const { commands } = require("./data.js");
const { botCommandsHandlers } = require("./botCommandsHandlers.js");

const [start, greeting, info, game] = commands;
const { handleStart, handleInfo, handleDefault } = botCommandsHandlers;

bot.on("message", (ctx) => {
  let text = ctx.message.text;
  let chatId = ctx.chat.id;

  switch (text) {
    case `/${start.command}`:
      handleStart(ctx, chatId);
      break;
    case `/${info.command}`:
      handleInfo(ctx, chatId);
      break;
    default:
      handleDefault(ctx, chatId);
  }
});

bot.start();
