import start from '../middleware/start'

describe('checking the start middleware', () => {
    test('is of type function', () => {
        expect(typeof start).toBe('function')
    })
})
