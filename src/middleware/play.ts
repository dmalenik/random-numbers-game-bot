import type { Context, SessionFlavor } from 'grammy'
import generateRandNum from '../services/generateRandNum'
import inlineKeyboard from '../view/inlineKeyboard'

const data = {
    action: 'Choose a random number',
    range: [0, 9],
}

const { action, range } = data
const [min, max] = range

interface SessionData {
    rand: number
    tries: number
}

type MyContext = Context & SessionFlavor<SessionData>

const play = (ctx: MyContext) => {
    ctx.session.rand = generateRandNum(min, max)
    ctx.reply(action, { reply_markup: inlineKeyboard })
}

export default play
