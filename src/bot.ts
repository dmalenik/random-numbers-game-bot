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

const { token } = process.env
const bot = new Bot<MyContext>(token!)

const client = new Client({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'sessions',
    password: '123456',
    port: 5432,
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
