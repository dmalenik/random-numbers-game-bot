const gameLogic = {
  handleGame: function (ctx, chatID, DB, gameInterface) {
    ctx.reply("Try to guess the number from 0 to 9");

    let randomNumber = Math.floor(Math.random() * 10);

    DB[chatID] = randomNumber;

    return setTimeout(() => {
      ctx.reply("Try to guess", {
        reply_markup: gameInterface,
      });
    }, 100);
  },
  respondToCallbackQuery: function (ctx, data, randomNumber, playAgainBtn) {
    if (data === randomNumber) {
      ctx.reply("You win!");
    } else {
      ctx.reply("You lose!");

      return ctx.reply("Play again", {
        reply_markup: playAgainBtn,
      });
    }
  },
};

module.exports.gameLogic = gameLogic;
