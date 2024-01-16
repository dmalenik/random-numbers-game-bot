import type { InitialFn } from './types/InitialFn'

const initial: InitialFn = () => {
    return {
        rand: 0,
        tries: 1,
    }
}

export default initial
