import type { ContextMid } from '../types/ContextMid'

const start: ContextMid = (obj) => {
    obj.reply(`Hello, ${obj.from?.first_name}!`)
    obj.replyWithPhoto(
        'https://media.licdn.com/dms/image/D4D22AQEkhVQlfjZQVA/feedshare-shrink_800/0/1683026284442?e=1707955200&v=beta&t=vlMaBtgMGtidUfu1Tcpw1TvIhNIP4Xgoakxr4T0eJTM'
    )
    obj.reply('To start to play press Play button')
}

export default start
