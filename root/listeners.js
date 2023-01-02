const { bot } = require("./bot.js");
const { gameBtns } = require("../game/gameBtns.js");
const { playAgainBtn } = require("../game/playAgainBtn.js");
const { commands } = require("../commands/commands-list.js");
const { commandsLogic } = require("../logic/commandsLogic");
const { gameLogic } = require("../logic/gameLogic.js");
const { DB } = require("./DB.js");

const [start, info, game] = commands;
const { handleStart, handleInfo, handleDefault } = commandsLogic;
const { handleGame, respondToCallbackQuery } = gameLogic;

bot.on(["::bot_command", "message:text"], (ctx) => {
  let text = ctx.message.text;
  let chatId = ctx.chat.id;

  switch (text) {
    case `/${start.command}`:
      handleStart(ctx, chatId);
      break;
    case `/${game.command}`:
      handleGame(ctx, chatId, DB, gameBtns);
      break;
    case `/${info.command}`:
      handleInfo(ctx);
      break;
    default:
      handleDefault(ctx);
  }
});

bot.on("callback_query", (ctx) => {
  let data = parseInt(ctx.callbackQuery.data, 10);
  let [randomNumber] = Object.values(DB);

  respondToCallbackQuery(ctx, data, randomNumber, playAgainBtn);
});

bot.start();
