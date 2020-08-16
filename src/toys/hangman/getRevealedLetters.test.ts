import { getRevealedLetters } from './getRevealedLetters'
import { HangmanSession } from './types'

describe('the getRevealedLetters Hangman helper', () => {
  describe('when user has guessed nothing', () => {
    const session: HangmanSession = {
      guesses: [],
      answer: 'plane',
      maxGuesses: 4,
    }
    test('we get a `null` per letter in the answer', () => {
      const result = getRevealedLetters(session)
      expect(result).toEqual([null, null, null, null, null])
    })
  })
  describe('when the user has guessed some letters', () => {
    const session: HangmanSession = {
      guesses: ['x', 'o', 'e'],
      answer: 'monkey',
      maxGuesses: 4,
    }
    test('those letters are included, the rest is null', () => {
      const result = getRevealedLetters(session)
      expect(result).toEqual([null, 'o', null, null, 'e', null])
    })
  })
  describe('when the user has guessed word included in the answer', () => {
    const session: HangmanSession = {
      guesses: ['o', 'n', 'monk'],
      answer: 'monkey',
      maxGuesses: 4,
    }
    test('word guesses are ignored', () => {
      const result = getRevealedLetters(session)
      expect(result).toEqual([null, 'o', 'n', null, null, null])
    })
  })
  describe('when the user has guessed the full word', () => {
    const session: HangmanSession = {
      guesses: ['x', 'o', 'door'],
      answer: 'door',
      maxGuesses: 4,
    }
    test('all letters are revealed', () => {
      const result = getRevealedLetters(session)
      expect(result).toEqual(['d', 'o', 'o', 'r'])
    })
  })
})
