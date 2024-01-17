import { InlineKeyboard } from 'grammy'
import inlineKeyboard from '../view/inlineKeyboard'

describe('checking inlineKeyboard', () => {
    test('is of type object', () => {
        expect(typeof inlineKeyboard).toBe('object')
    })

    test('is instance of InlineKeyboard', () => {
        expect(inlineKeyboard).toBeInstanceOf(InlineKeyboard)
    })
})
