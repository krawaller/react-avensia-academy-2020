import { getNbrOfErrors } from './getNbrOfErrors'
import { HangmanSession } from './types'

/**
 * Helper function that takes a Hangman state and returns whether the
 * the current status is `won`, `lost` or `playing`
 */
export function getSessionStatus(session: HangmanSession) {
  if (getNbrOfErrors(session) > session.maxGuesses) return 'lost'
  if (session.guesses.includes(session.answer)) return 'won'
  if (
    session.answer.split('').every((letter) => session.guesses.includes(letter))
  )
    return 'won'
  return 'playing'
}
