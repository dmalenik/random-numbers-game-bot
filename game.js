const { bot } = require("./bot.js");
const { Menu } = require("@grammyjs/menu");
const { DB } = require("./DB.js");
const { logic } = require("./logic.js");
const { tryAgain } = require("./inlineKeyboard.js");

const { handleGameCallbackQuery } = logic;
const gameOptions = new Menu("random numbers");

gameOptions
  .text("1", (ctx) => handleGameCallbackQuery(ctx, 0, 0, DB, tryAgain))
  .text("2", (ctx) => handleGameCallbackQuery(ctx, 0, 1, DB, tryAgain))
  .text("3", (ctx) => handleGameCallbackQuery(ctx, 0, 2, DB, tryAgain))
  .row()
  .text("4", (ctx) => handleGameCallbackQuery(ctx, 1, 0, DB, tryAgain))
  .text("5", (ctx) => handleGameCallbackQuery(ctx, 1, 1, DB, tryAgain))
  .text("6", (ctx) => handleGameCallbackQuery(ctx, 1, 2, DB, tryAgain))
  .row()
  .text("7", (ctx) => handleGameCallbackQuery(ctx, 2, 0, DB, tryAgain))
  .text("8", (ctx) => handleGameCallbackQuery(ctx, 2, 1, DB, tryAgain))
  .text("9", (ctx) => handleGameCallbackQuery(ctx, 2, 2, DB, tryAgain))
  .row()
  .text("0", (ctx) => handleGameCallbackQuery(ctx, 3, 0, DB, tryAgain));

bot.use(gameOptions);

module.exports.gameOptions = gameOptions;
