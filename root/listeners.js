const { bot } = require("./bot.js");
const { gameBtns } = require("../game/gameBtns.js");
const { playAgainBtn } = require("../game/playAgainBtn.js");
const { commands } = require("../commands/commands-list.js");
const { commandsLogic } = require("../logic/commandsLogic");
const { gameLogic } = require("../logic/gameLogic.js");
const { DB } = require("./DB.js");

const [start, info, game] = commands;
const { handleStart, handleInfo, handleDefault } = commandsLogic;
const { handleGame, isWinner } = gameLogic;

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
  let data = ctx.callbackQuery.data;

  switch (data) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      {
        let currentNumber = parseInt(data, 10);
        let [randomNumber] = Object.values(DB);

        isWinner(ctx, currentNumber, randomNumber, playAgainBtn);
      }
      break;
    case "/game":
      {
        let chatId = ctx.chat.id;

        handleGame(ctx, chatId, DB, gameBtns);
      }
      break;
    default:
      "Sorry, I don't know how to answer your query";
  }
});

bot.start();
