module.exports.botCommandsHandlers = {
  handleStart: async function handleStart(context) {
    let chatId = context.chat.id;

    await context.api.sendPhoto(
      chatId,
      "https://tlgrm.eu/_/stickers/6a3/497/6a34971d-6648-37c2-8f2b-8940f65ba906/8.jpg"
    );
    await context.api.sendMessage(chatId, "Hi, Dima!");
  },
  handleInfo: async function handleInfo(context) {
    let chatId = context.chat.id;

    await context.api.sendMessage(
      chatId,
      `Your name is ${context.from.first_name} ${context.from.last_name}`
    );
  },
};
