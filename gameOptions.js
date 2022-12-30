const { bot } = require("./bot.js");
const { Menu } = require("@grammyjs/menu");

const gameOptions = new Menu("my-menu-identifier");

gameOptions
  .text("1", (ctx) => ctx.reply("You pressed 1!"))
  .text("2", (ctx) => ctx.reply("You pressed 2!"))
  .text("3", (ctx) => ctx.reply("You pressed 3!"))
  .row()
  .text("4", (ctx) => ctx.reply("You pressed 4!"))
  .text("5", (ctx) => ctx.reply("You pressed 5!"))
  .text("6", (ctx) => ctx.reply("You pressed 6!"))
  .row()
  .text("7", (ctx) => ctx.reply("You pressed 7!"))
  .text("8", (ctx) => ctx.reply("You pressed 8!"))
  .text("9", (ctx) => ctx.reply("You pressed 9!"))
  .row()
  .text("0", (ctx) => ctx.reply("You pressed 0!"));

bot.use(gameOptions);

module.exports.gameOptions = gameOptions;
