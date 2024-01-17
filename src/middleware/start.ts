import type { Context } from 'grammy'

interface ContextMid {
    (ctx: Context): void
}
}

export default start
