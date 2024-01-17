import play from '../middleware/play'

describe('checking the play middleware', () => {
    test('is of type function', () => {
        expect(typeof play).toBe('function')
    })
})
