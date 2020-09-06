import { addGuessToSession } from './addGuessToSession'
import { HangmanSession } from './model'

describe('the Hangman addGuessToSession logic function', () => {
  describe('when game is in progress', () => {
    const session: HangmanSession = {
      guesses: ['a', 'o'],
      answer: 'plane',
      maxGuesses: 4,
    }
    test('new guesses are added to the session', () => {
      const result = addGuessToSession({ guess: 'i', session })
      expect(result).toEqual({
        ...session,
        guesses: session.guesses.concat('i'),
      })
    })
    test('empty guesses are ignored', () => {
      const result = addGuessToSession({ guess: '', session })
      expect(result).toEqual(session)
    })
    test('repeat guesses are ignored', () => {
      const result = addGuessToSession({ guess: 'a', session })
      expect(result).toEqual(session)
    })
  })
  describe('when game is won', () => {
    const session: HangmanSession = {
      guesses: ['a', 'e', 'plane'],
      answer: 'plane',
      maxGuesses: 4,
    }
    test('guesses are ignored', () => {
      const result = addGuessToSession({ guess: 'p', session })
      expect(result).toEqual(session)
    })
  })
  describe('when game is lost', () => {
    const session: HangmanSession = {
      guesses: ['i', 'a', 'o', 'y', 'x', 'q'],
      answer: 'plane',
      maxGuesses: 4,
    }
    test('guesses are ignored', () => {
      const result = addGuessToSession({ guess: 'p', session })
      expect(result).toEqual(session)
    })
  })
})
