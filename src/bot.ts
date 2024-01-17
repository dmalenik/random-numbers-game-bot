import type { Context, SessionFlavor } from 'grammy'
import { Bot, session } from 'grammy'
import initial from './helpers/initial'
import start from './middleware/start'
import play from './middleware/play'
import onCallbackQueryData from './middleware/onCallbackQueryData'
import 'dotenv/config'

interface SessionData {
    rand: number
    tries: number
}

type MyContext = Context & SessionFlavor<SessionData>

const { token } = process.env
const bot = new Bot<MyContext>(token!)

bot.use(session({ initial }))

bot.command('start', start)
bot.command('play', play)

bot.on('callback_query:data', onCallbackQueryData)

bot.start()

export default bot
