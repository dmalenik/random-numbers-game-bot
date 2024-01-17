import onCallbackQueryData from '../middleware/onCallbackQueryData'

describe('checking onCallbackQueryData', () => {
    test('is of type function', () => {
        expect(typeof onCallbackQueryData).toBe('function')
    })
})
