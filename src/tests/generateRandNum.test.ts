import generateRandNum from '../services/generateRandNum'

describe('checking random numbers generator function', () => {
    test('if rand is in a range between 0 and 9', () => {
        const rand = generateRandNum(0, 9)

        expect(rand).toBeGreaterThanOrEqual(0)
        expect(rand).toBeLessThanOrEqual(9)
    })
})
