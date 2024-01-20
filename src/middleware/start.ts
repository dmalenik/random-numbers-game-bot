import type { Context } from 'grammy'

const data = {
    greeting: 'Hi',
    memeURL:
        'https://media.licdn.com/dms/image/D4D22AQEkhVQlfjZQVA/feedshare-shrink_800/0/1683026284442?e=1707955200&v=beta&t=vlMaBtgMGtidUfu1Tcpw1TvIhNIP4Xgoakxr4T0eJTM',
    action: 'Press /play command to start the game',
}

const { greeting, memeURL, action } = data

const start = async (ctx: Context) => {
    try {
        await ctx.reply(`${greeting}, ${ctx.from?.first_name}`)
        await ctx.replyWithPhoto(memeURL)
        await ctx.reply(action)
    } catch (error) {
        console.log(error)
    }
}

export default start
