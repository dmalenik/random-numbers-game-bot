const gameLogic = {
  handleGame: function (context, chatID, gameOptions, DB) {
    context.reply("Try to guess the number from 0 to 9");

    let randomNumber = Math.floor(Math.random() * 10);

    DB[chatID] = randomNumber;

    return setTimeout(() => {
      context.reply("Try to guess", {
        reply_markup: gameOptions,
      });
    }, 100);
  },
  handleGameCallbackQuery: function (context, row, column, DB, playAgainBtn) {
    let button =
      context.update.callback_query.message.reply_markup.inline_keyboard[row][
        column
      ];
    let text = button.text;
    let current = parseInt(text, 10);
    let [toCompare] = Object.values(DB);
    if (current === toCompare) {
      context.reply("You win!");
    } else {
      context.reply("You lose!");
      context.reply("Try again", { reply_markup: playAgainBtn });
    }
  },
};

module.exports.gameLogic = gameLogic;
