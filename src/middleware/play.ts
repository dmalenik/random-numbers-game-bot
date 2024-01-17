import type { Context, SessionFlavor } from 'grammy'
import type { NextFunction } from 'grammy'
import generateRandNum from '../services/generateRandNum'
import inlineKeyboard from '../view/inlineKeyboard'

const data = {
    action: 'Choose a random number',
    range: [0, 9],
}
interface SessionData {
    rand: number
    tries: number
}

type MyContext = Context & SessionFlavor<SessionData>

interface MyContextMid {
    (ctx: MyContext, next: NextFunction): void
}

const play: MyContextMid = (ctx) => {
    const { action, range } = data
    const [min, max] = range

    ctx.session.rand = generateRandNum(min, max)
    ctx.reply(action, { reply_markup: inlineKeyboard })
}

export default play
