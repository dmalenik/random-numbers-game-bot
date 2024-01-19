interface SessionData {
    rand: number
    tries: number
}

const initial: () => SessionData = () => {
    return {
        rand: 0,
        tries: 1,
    }
}

export default initial
