import { InlineKeyboard } from 'grammy'
import gameKeyboard from '../view/gameKeyboard'

describe('checking inlineKeyboard', () => {
    test('is of type object', () => {
        expect(typeof gameKeyboard).toBe('object')
    })

    test('is instance of InlineKeyboard', () => {
        expect(gameKeyboard).toBeInstanceOf(InlineKeyboard)
    })
})
