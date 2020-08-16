import { HangmanSession } from './types'

/**
 * Helper function that takes a Hangman session and returns the total number
 * of errors among the made guesses
 */
export function getNbrOfErrors(session: HangmanSession) {
  return session.guesses.filter((guess) =>
    guess.length === 1
      ? !session.answer.includes(guess)
      : session.answer !== guess
  ).length
}
