const logic = {
  handleStart: function (context, chatID) {
    context.api.sendPhoto(
      chatID,
      "https://tlgrm.eu/_/stickers/6a3/497/6a34971d-6648-37c2-8f2b-8940f65ba906/8.jpg"
    );
    setTimeout(() => {
      context.reply(`Hi, ${context.from.first_name}!`);
    }, 100);
  },
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
  handleGameCallbackQuery: function (context, row, column, DB, tryAgain) {
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
      context.reply("Try again", { reply_markup: tryAgain });
    }
  },
  handleInfo: function (context) {
    context.reply(`Your name is ${context.from.first_name}`);
  },
  handleDefault: function (context) {
    context.reply("Sorry, I don't know this command");
  },
};

module.exports.logic = logic;
