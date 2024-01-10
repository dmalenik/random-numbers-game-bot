import { SessionData } from './MyContext'

interface InitialFn {
    (): SessionData
}

export type { InitialFn }
