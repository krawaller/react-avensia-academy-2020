import { getSessionStatus } from './getSessionStatus'
import { HangmanSession } from './model'

type PerformGuessOpts = {
  /**
   * The guess to be made (a letter or a word)
   */
  guess: string
  /**
   * The session to make the guess in
   */
  session: HangmanSession
}

/**
 * The main Hangman game logic. Takes a guess (a letter or a word) and
 * the current session, and returns an updated session
 */
export function addGuessToSession(opts: PerformGuessOpts) {
  const { guess, session } = opts
  if (
    !guess || // ignore empty guesses
    session.guesses.includes(guess) || // ignore duplicate guesses
    getSessionStatus(session) !== 'playing' // ignore guesses after game end
  ) {
    return session
  }
  return {
    ...session,
    guesses: session.guesses.concat(guess),
  }
}
