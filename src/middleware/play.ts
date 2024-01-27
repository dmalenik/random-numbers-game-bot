import type { Context, SessionFlavor } from 'grammy'
import generateRandNum from '../services/generateRandNum'
import gameKeyboard from '../view/gameKeyboard'

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
    try {
        ctx.session.rand = generateRandNum(min, max)
        ctx.session.tries = ctx.session.tries > 1 ? 1 : ctx.session.tries
        ctx.reply(action, { reply_markup: gameKeyboard })
    } catch (error) {
        console.log(error)
    }
}

export default play
