import type { Context, SessionFlavor } from 'grammy'
import bot, { client } from '../bot'
import gameKeyboard from '../view/gameKeyboard'
import choiceKeyboard from '../view/choiceKeyboard'

const data = {
    youWin: 'You win! Number of tries:',
    memeURL: 'https://media1.tenor.com/m/mvegoURYtSUAAAAC/jonah-hill-omg.gif',
    tryAgain: 'Try again',
    choiceQuestion: 'Would you like to make another try?',
    choices: ['Yes!', 'No?'],
    newGame: 'Press /play command again to start a new game',
    goodbye: 'Ok! Bye then',
}

const { youWin, memeURL, tryAgain, choiceQuestion, choices, newGame, goodbye } =
    data

interface SessionData {
    rand: number
    tries: number
}
type MyContext = Context & SessionFlavor<SessionData>

const onCallbackQueryData = async (ctx: MyContext) => {
    const data = ctx.update.callback_query?.data as string
    const state = choices.includes(data) ? 'choice' : 'game'
    let pressed = null

    switch (state) {
        case 'game':
            try {
                pressed = Number.parseInt(data)

                if (pressed === ctx.session.rand) {
                    await ctx.reply(`${youWin} ${ctx.session.tries}`)
                    await ctx.replyWithAnimation(memeURL)
                    await ctx.reply(choiceQuestion, {
                        reply_markup: choiceKeyboard,
                    })
                } else {
                    ctx.session.tries++
                    await ctx.reply(tryAgain, { reply_markup: gameKeyboard })
                }
            } catch (error) {
                console.log(error)
            }

            break
        case 'choice':
            pressed = data

            try {
                if (pressed === 'Yes!') {
                    await ctx.reply(newGame)
                } else {
                    await ctx.reply(goodbye)
                    await client.end()
                    await bot.stop()
                }
            } catch (error) {
                console.log(error)
            }

            break
    }
}

export default onCallbackQueryData
