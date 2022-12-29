module.exports.botCommandsHandlers = {
  handleStart: function (context, chatID) {
    context.api.sendPhoto(
      chatID,
      "https://tlgrm.eu/_/stickers/6a3/497/6a34971d-6648-37c2-8f2b-8940f65ba906/8.jpg"
    );
    setTimeout(() => {
      context.api.sendMessage(chatID, "Hi, Dima!");
    }, 100);
  },
  handleInfo: function (context, chatID) {
    context.api.sendMessage(chatID, `Your name is ${context.from.first_name}`);
  },
  handleDefault: function (context, chatID) {
    context.api.sendMessage(chatID, "Sorry, I don't know this command");
  },
};
