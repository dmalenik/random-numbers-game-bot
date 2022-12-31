const { Menu } = require("@grammyjs/menu");
const { DB } = require("../root/DB.js");
const { gameLogic } = require("../logic/gameLogic.js");
const { playAgainBtn } = require("./playAgainBtn.js");

const { handleGameCallbackQuery } = gameLogic;

const gameOptions = new Menu("random numbers");

gameOptions
  .text("1", (ctx) => handleGameCallbackQuery(ctx, 0, 0, DB, playAgainBtn))
  .text("2", (ctx) => handleGameCallbackQuery(ctx, 0, 1, DB, playAgainBtn))
  .text("3", (ctx) => handleGameCallbackQuery(ctx, 0, 2, DB, playAgainBtn))
  .row()
  .text("4", (ctx) => handleGameCallbackQuery(ctx, 1, 0, DB, playAgainBtn))
  .text("5", (ctx) => handleGameCallbackQuery(ctx, 1, 1, DB, playAgainBtn))
  .text("6", (ctx) => handleGameCallbackQuery(ctx, 1, 2, DB, playAgainBtn))
  .row()
  .text("7", (ctx) => handleGameCallbackQuery(ctx, 2, 0, DB, playAgainBtn))
  .text("8", (ctx) => handleGameCallbackQuery(ctx, 2, 1, DB, playAgainBtn))
  .text("9", (ctx) => handleGameCallbackQuery(ctx, 2, 2, DB, playAgainBtn))
  .row()
  .text("0", (ctx) => handleGameCallbackQuery(ctx, 3, 0, DB, playAgainBtn));

module.exports.gameOptions = gameOptions;
