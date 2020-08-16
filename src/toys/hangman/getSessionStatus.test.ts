import { getSessionStatus } from './getSessionStatus'
import { HangmanSession } from './types'

describe('the getSessionStatus Hangman helper', () => {
  describe('when user has made max number of errors', () => {
    const session: HangmanSession = {
      guesses: ['x', 'y', 'z', 'm'],
      answer: 'plane',
      maxGuesses: 4,
    }
    test('we get `playing`', () => {
      const result = getSessionStatus(session)
      expect(result).toEqual('playing')
    })
  })
  describe('when user has made more than max number of errors', () => {
    const session: HangmanSession = {
      guesses: ['x', 'y', 'z', 'm', 'q'],
      answer: 'plane',
      maxGuesses: 4,
    }
    test('we get `lost`', () => {
      const result = getSessionStatus(session)
      expect(result).toEqual('lost')
    })
  })
  describe('when user has guessed all individual letters', () => {
    const session: HangmanSession = {
      guesses: ['a', 'o', 'r', 'd'],
      answer: 'door',
      maxGuesses: 4,
    }
    test('we get `won`', () => {
      const result = getSessionStatus(session)
      expect(result).toEqual('won')
    })
  })
  describe('when user has guessed the correct word', () => {
    const session: HangmanSession = {
      guesses: ['a', 'o', 'r', 'door'],
      answer: 'door',
      maxGuesses: 4,
    }
    test('we get `won`', () => {
      const result = getSessionStatus(session)
      expect(result).toEqual('won')
    })
  })
  describe('when user has guesses remaining', () => {
    const session: HangmanSession = {
      guesses: ['a', 'o', 'm'],
      answer: 'door',
      maxGuesses: 4,
    }
    test('we get `playing`', () => {
      const result = getSessionStatus(session)
      expect(result).toEqual('playing')
    })
  })
})
