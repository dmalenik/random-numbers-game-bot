import { Bot, session } from 'grammy'
import token from './data'
import initial from './initial'
import start from './middleware/start'
import play from './middleware/play'
import onCallbackQueryData from './middleware/onCallbackQueryData'
import type { MyContext } from './types/MyContext'

const bot = new Bot<MyContext>(token)

bot.use(session({ initial }))

bot.command('start', start)
bot.command('play', play)

bot.on('callback_query:data', onCallbackQueryData)

bot.start()

export default bot
