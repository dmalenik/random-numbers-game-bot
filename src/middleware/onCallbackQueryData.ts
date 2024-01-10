import inlineKeyboard from '../view/inlineKeyboard'
import bot from '../bot'
import { MyContextMid } from '../types/MyContextMid'

const onCallbackQueryData: MyContextMid = (obj) => {
    const data = obj.update.callback_query?.data ?? ''
    const pressed = Number.parseInt(data)
    const { rand } = obj.session

    if (pressed === rand) {
        obj.reply(`You win! Number of tries: ${obj.session.tries}`)
        obj.replyWithAnimation(
            'https://media1.tenor.com/m/mvegoURYtSUAAAAC/jonah-hill-omg.gif'
        )
        bot.stop()
    } else {
        obj.session.tries++
        obj.reply('Try again', { reply_markup: inlineKeyboard })
    }
}

export default onCallbackQueryData
