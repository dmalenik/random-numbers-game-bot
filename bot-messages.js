const { bot } = require("./bot.js");
const { commands } = require("./bot-commands.js");
const [start, greeting, info, game] = commands;

bot.command(start.command, async (ctx) => {
  let chatId = ctx.chat.id;

  await ctx.api.sendPhoto(
    chatId,
    "https://tlgrm.eu/_/stickers/6a3/497/6a34971d-6648-37c2-8f2b-8940f65ba906/8.jpg"
  );
  await ctx.api.sendMessage(chatId, "Hi, Dima!");
});
bot.command(info.command, async (ctx) => {
  let chatId = ctx.chat.id;

  await ctx.api.sendMessage(
    chatId,
    `Your name is ${ctx.from.first_name} ${ctx.from.last_name}`
  );
});

// bot.start();
