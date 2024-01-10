import type { Context, SessionFlavor } from 'grammy'

interface SessionData {
    rand: number
    tries: number
}

type MyContext = Context & SessionFlavor<SessionData>

export type { MyContext, SessionData }
