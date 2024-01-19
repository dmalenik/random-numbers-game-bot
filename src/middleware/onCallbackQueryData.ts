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

const onCallbackQueryData = async (ctx: MyContext) => {
    const data = ctx.update.callback_query?.data ?? ''
    const state = choice.includes(data) ? 'choice' : 'game'
    let pressed = null

    switch (state) {
        case 'game':
            pressed = Number.parseInt(data)

            if (pressed === ctx.session.rand) {
                await ctx.reply(`${info} ${ctx.session.tries}`)
                await ctx.replyWithAnimation(memeURL)
                await ctx.reply('Would you like to make another try?', {
                    reply_markup: choiceKeyboard,
                })
            } else {
                ctx.session.tries++
                await ctx.reply(tryAgain, { reply_markup: gameKeyboard })
            }
            break
        case 'choice':
            pressed = data

            if (pressed === 'Yes!') {
                await ctx.reply(playAgain)
            } else {
                await bot.stop()
            }
            break
    }
}

export default onCallbackQueryData
