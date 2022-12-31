const { bot } = require("./bot.js");
const { gameOptions } = require("../game/gameOptions.js");
const { commands } = require("../commands/commands-list.js");
const { commandsLogic } = require("../logic/commandsLogic");
const { gameLogic } = require("../logic/gameLogic.js");
const { DB } = require("./DB.js");

const [start, info, game] = commands;
const { handleStart, handleInfo, handleDefault } = commandsLogic;
const { handleGame } = gameLogic;

bot.use(gameOptions);

bot.on(["::bot_command", "message:text"], (ctx) => {
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

bot.callbackQuery("/game", (ctx) => {
  let chatId = ctx.chat.id;

  return handleGame(ctx, chatId, gameOptions, DB);
});

bot.start();
