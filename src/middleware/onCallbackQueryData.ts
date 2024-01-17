import type { Context, SessionFlavor } from 'grammy'
import type { NextFunction } from 'grammy'
import bot from '../bot'
import inlineKeyboard from '../view/inlineKeyboard'

const data = {
    info: 'You win! Number of tries:',
    memeURL: 'https://media1.tenor.com/m/mvegoURYtSUAAAAC/jonah-hill-omg.gif',
    action: 'Try again',
}

interface SessionData {
    rand: number
    tries: number
}

type MyContext = Context & SessionFlavor<SessionData>

interface MyContextMid {
    (ctx: MyContext, next: NextFunction): void
}

const onCallbackQueryData: MyContextMid = (ctx) => {
    const { info, memeURL, action } = data
    const updData = ctx.update.callback_query?.data ?? ''
    const pressed = Number.parseInt(updData)

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
