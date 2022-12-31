const { InlineKeyboard } = require("grammy");

const playAgainBtn = new InlineKeyboard();

playAgainBtn.text("Play again", "/game");

module.exports.playAgainBtn = playAgainBtn;
