import type { Context, SessionFlavor } from 'grammy'
import bot from '../bot'
import gameKeyboard from '../view/gameKeyboard'
import inlineKeyboard from '../view/inlineKeyboard'

const data = {
    info: 'You win! Number of tries:',
    memeURL: 'https://media1.tenor.com/m/mvegoURYtSUAAAAC/jonah-hill-omg.gif',
    action: 'Try again',
}

const { info, memeURL, action } = data

interface SessionData {
    rand: number
    tries: number
}

type MyContext = Context & SessionFlavor<SessionData>

const onCallbackQueryData = (ctx: MyContext) => {
    const data = ctx.update.callback_query?.data ?? ''
    const pressed = Number.parseInt(data)

    if (pressed === ctx.session.rand) {
        ctx.reply(`${info} ${ctx.session.tries}`)
        ctx.replyWithAnimation(memeURL)
        bot.stop()
    } else {
        ctx.session.tries++
        ctx.reply(action, { reply_markup: inlineKeyboard })
    }
}

export default onCallbackQueryData
