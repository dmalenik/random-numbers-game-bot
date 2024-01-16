import { Bot, session } from 'grammy'
import initial from './initial'
import start from './middleware/start'
import play from './middleware/play'
import onCallbackQueryData from './middleware/onCallbackQueryData'
import type { MyContext } from './types/MyContext'
import 'dotenv/config'

const bot = new Bot<MyContext>(process.env.TOKEN!)

bot.use(session({ initial }))

bot.command('start', start)
bot.command('play', play)

bot.on('callback_query:data', onCallbackQueryData)

bot.start()

export default bot
