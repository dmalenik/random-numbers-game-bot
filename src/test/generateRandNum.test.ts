import generateRandNum from '../view/generateRandNum'

describe('checking random numbers generator function', () => {
    const rand = generateRandNum(0, 9)
    test('if rand is greater then or equal to 0', () => {
        expect(rand).toBeGreaterThanOrEqual(0)
    })
    test('if rand is less then or equal to 9', () => {
        expect(rand).toBeLessThanOrEqual(9)
    })
})
