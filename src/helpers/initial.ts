interface SessionData {
    rand: number
    tries: number
}

interface InitialFn {
    (): SessionData
}

const initial: InitialFn = () => {
    return {
        rand: 0,
        tries: 1,
    }
}

export default initial
