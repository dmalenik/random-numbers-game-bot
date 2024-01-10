import type { Context } from 'grammy'

interface ContextMid {
    (obj: Context): void
}

export type { ContextMid }
