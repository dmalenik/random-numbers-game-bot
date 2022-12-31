const commandsLogic = {
  handleStart: function (context, chatID) {
    context.api.sendPhoto(
      chatID,
      "https://tlgrm.eu/_/stickers/6a3/497/6a34971d-6648-37c2-8f2b-8940f65ba906/8.jpg"
    );
    setTimeout(() => {
      context.reply(`Hi, ${context.from.first_name}!`);
    }, 100);
  },
  handleInfo: function (context) {
    context.reply(`Your name is ${context.from.first_name}`);
  },
  handleDefault: function (context) {
    context.reply("Sorry, I don't know this command");
  },
};

module.exports.commandsLogic = commandsLogic;
