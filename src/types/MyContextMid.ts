import type { NextFunction } from 'grammy'
import type { MyContext } from '../types/MyContext'

interface MyContextMid {
    (obj: MyContext, next: NextFunction): void
}

export type { MyContextMid }
