const { InlineKeyboard } = require("grammy");

const inlineKeyboard = new InlineKeyboard();

inlineKeyboard.text("Play again", "/game");

module.exports.tryAgain = inlineKeyboard;
