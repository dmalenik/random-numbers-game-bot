import { Bot } from 'grammy'
import bot from '../bot'

describe('checking value of Bot', () => {
    test('is of type object', () => {
        expect(typeof bot).toBe('object')
    })

    test('is instance of Bot', () => {
        expect(bot).toBeInstanceOf(Bot)
    })
})
