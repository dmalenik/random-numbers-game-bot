import type { MyContextMid } from '../types/MyContextMid'
import inlineKeyboard from '../view/inlineKeyboard'
import generateRandNum from '../view/generateRandNum'

const play: MyContextMid = (obj) => {
    obj.session.rand = generateRandNum(0, 9)
    obj.reply('Choose a random number', { reply_markup: inlineKeyboard })
}

export default play
