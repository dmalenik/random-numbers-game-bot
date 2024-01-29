import type { Context, SessionFlavor } from 'grammy'
import { Bot, session } from 'grammy'
import initial from './helpers/initial'
import start from './middleware/start'
import play from './middleware/play'
import onCallbackQueryData from './middleware/onCallbackQueryData'
import { PsqlAdapter } from '@grammyjs/storage-psql'
import { Client } from 'pg'
import 'dotenv/config'

interface SessionData {
    rand: number
    tries: number
}
type MyContext = Context & SessionFlavor<SessionData>

const { TOKEN, USER, HOST, DATABASE, PASSWORD, PORT } = process.env

const bot = new Bot<MyContext>(TOKEN!)

const client = new Client({
    user: USER,
    host: HOST,
    database: DATABASE,
    password: PASSWORD,
    port: +PORT!,
})

const init = async () => {
    await client.connect()

    bot.use(
        session({
            initial,
            storage: await PsqlAdapter.create({
                tableName: 'session',
                client,
            }),
        })
    )

    bot.command('start', start)
    bot.command('play', play)

    bot.on('callback_query:data', onCallbackQueryData)

    bot.start()
}

init()

export default bot
export { client }
