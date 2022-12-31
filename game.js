const { bot } = require("./bot.js");
const { Menu } = require("@grammyjs/menu");
const { DB } = require("./DB.js");

// write a handler
// if number is wrong - clear DB
// start a new game

const gameOptions = new Menu("random numbers");
const handleCallbackQuery = (context, row, column, DB) => {
  let text =
    context.update.callback_query.message.reply_markup.inline_keyboard[line][
      queue
    ].text;
  let current = parseInt(text, 10);
  let [toCompare] = Object.values(DB);

  if (current === toCompare) {
    context.reply("You win!");
  } else {
    context.reply("You lose!");
  }
};

gameOptions
  .text("1", (ctx) => handleCallbackQuery(ctx, 0, 0, DB))
  .text("2", (ctx) => handleCallbackQuery(ctx, 0, 1, DB))
  .text("3", (ctx) => handleCallbackQuery(ctx, 0, 2, DB))
  .row()
  .text("4", (ctx) => handleCallbackQuery(ctx, 1, 0, DB))
  .text("5", (ctx) => handleCallbackQuery(ctx, 1, 1, DB))
  .text("6", (ctx) => handleCallbackQuery(ctx, 1, 2, DB))
  .row()
  .text("7", (ctx) => handleCallbackQuery(ctx, 2, 0, DB))
  .text("8", (ctx) => handleCallbackQuery(ctx, 2, 1, DB))
  .text("9", (ctx) => handleCallbackQuery(ctx, 2, 2, DB))
  .row()
  .text("0", (ctx) => handleCallbackQuery(ctx, 3, 0, DB));

bot.use(gameOptions);

module.exports.gameOptions = gameOptions;
