import { performGuess } from './performGuess'
import { HangmanSession } from './types'

describe('the Hangman performGuess logic function', () => {
  describe('when game is in progress', () => {
    const session: HangmanSession = {
      guesses: ['a', 'o'],
      answer: 'plane',
      maxGuesses: 4,
    }
    test('new guesses are added to the session', () => {
      const result = performGuess({ guess: 'i', session })
      expect(result).toEqual({
        ...session,
        guesses: session.guesses.concat('i'),
      })
    })
    test('empty guesses are ignored', () => {
      const result = performGuess({ guess: '', session })
      expect(result).toEqual(session)
    })
    test('repeat guesses are ignored', () => {
      const result = performGuess({ guess: 'a', session })
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
      const result = performGuess({ guess: 'p', session })
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
      const result = performGuess({ guess: 'p', session })
      expect(result).toEqual(session)
    })
  })
})
