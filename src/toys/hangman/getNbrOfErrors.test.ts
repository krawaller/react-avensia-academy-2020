import { getNbrOfErrors } from './getNbrOfErrors'
import { HangmanSession } from './model'

describe('the getNbrOfErrors Hangman helper', () => {
  describe('when user has guessed nothing', () => {
    const session: HangmanSession = {
      guesses: [],
      answer: 'plane',
      maxGuesses: 4,
    }
    test('we get 0', () => {
      const result = getNbrOfErrors(session)
      expect(result).toEqual(0)
    })
  })
  describe('when the user has made a few guesses', () => {
    const session: HangmanSession = {
      guesses: ['x', 'o', 'e', 'donkey', 'monkey'],
      answer: 'monkey',
      maxGuesses: 4,
    }
    test('only the errors are counted', () => {
      const result = getNbrOfErrors(session)
      expect(result).toEqual(2)
    })
  })
})
