import initial from '../helpers/initial'

describe('checking initial function', () => {
    test('is of type function', () => {
        expect(typeof initial).toBe('function')
    })

    test('return value is appropriate', () => {
        const mockFn = jest.fn(initial)

        expect(mockFn()).toEqual({
            rand: 0,
            tries: 1,
        })
    })
})
