import type { Context, SessionFlavor } from 'grammy'
import type { NextFunction } from 'grammy'
import inlineKeyboard from '../view/inlineKeyboard'
interface SessionData {
    rand: number
    tries: number
}

type MyContext = Context & SessionFlavor<SessionData>

interface MyContextMid {
    (ctx: MyContext, next: NextFunction): void
}

const play: MyContextMid = (obj) => {
    obj.session.rand = generateRandNum(0, 9)
    obj.reply('Choose a random number', { reply_markup: inlineKeyboard })
}

export default play
