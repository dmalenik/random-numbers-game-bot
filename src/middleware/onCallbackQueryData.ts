import type { Context, SessionFlavor } from 'grammy'
import bot from '../bot'
import gameKeyboard from '../view/gameKeyboard'
import choiceKeyboard from '../view/choiceKeyboard'

const data = {
    info: 'You win! Number of tries:',
    memeURL: 'https://media1.tenor.com/m/mvegoURYtSUAAAAC/jonah-hill-omg.gif',
    tryAgain: 'Try again',
    playAgain: 'Press /play command again to start a new game',
    choice: ['Yes!', 'No?'],
}

const { info, memeURL, tryAgain, playAgain, choice } = data

interface SessionData {
    rand: number
    tries: number
}

type MyContext = Context & SessionFlavor<SessionData>

const onCallbackQueryData = (ctx: MyContext) => {
    const data = ctx.update.callback_query?.data ?? ''
    const state = choice.includes(data) ? 'choice' : 'game'
    let pressed = null

    switch (state) {
        case 'game':
            pressed = Number.parseInt(data)

            if (pressed === ctx.session.rand) {
                ctx.reply(`${info} ${ctx.session.tries}`)
                ctx.replyWithAnimation(memeURL)
                ctx.reply('Would you like to make another try?', {
                    reply_markup: choiceKeyboard,
                })
            } else {
                ctx.session.tries++
                ctx.reply(tryAgain, { reply_markup: gameKeyboard })
            }
            break
        case 'choice':
            pressed = data

            if (pressed === 'Yes!') {
                ctx.reply(playAgain)
            } else {
                bot.stop()
            }
            break
    }
}

export default onCallbackQueryData
