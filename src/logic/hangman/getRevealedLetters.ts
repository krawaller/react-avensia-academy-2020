import { HangmanSession } from './model'

/**
 * Helper function that takes a Hangman session and returns an array of letters
 * in the answer, masking all non-guessed letters with `null`
 */
export function getRevealedLetters(session: HangmanSession) {
  return session.guesses.includes(session.answer)
    ? session.answer.split('')
    : session.answer
        .split('')
        .map((letter) => (session.guesses.includes(letter) ? letter : null))
}
