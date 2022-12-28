const { bot } = require("./bot.js");
const { commands } = require("./data.js");
const { botCommandsHandlers } = require("./botCommandsHandlers.js");

const [start, greeting, info, game] = commands;

bot.on("message", (ctx) => {
  let text = ctx.message.text;
  let chatId = ctx.chat.id;

  if (text === `/${start.command}`) {
    botCommandsHandlers.handleStart(ctx, chatId);
  } else if (text === `/${info.command}`) {
    botCommandsHandlers.handleInfo(ctx, chatId);
  } else {
    botCommandsHandlers.handleDefault(ctx, chatId);
  }
});

bot.start();
