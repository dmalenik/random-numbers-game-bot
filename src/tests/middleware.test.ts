import start from '../middleware/start'
import play from '../middleware/play'
import onCallbackQueryData from '../middleware/onCallbackQueryData'

describe('checking the middleware', () => {
    test('is of type function', () => {
        expect(typeof start).toBe('function')
        expect(typeof play).toBe('function')
        expect(typeof onCallbackQueryData).toBe('function')
    })
})
