const { Bot } = require("grammy");
const token = require("./data.js");
const bot = new Bot(token);

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running!"));
bot.command("greeting", (ctx) => ctx.reply("Hello, world!"));
// bot.on("message", (ctx) => {
//   console.log(ctx);
//   ctx.reply("Got another message!");
// });
bot.start();
