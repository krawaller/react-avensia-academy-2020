import { getSessionStatus } from './getSessionStatus'
import { HangmanSession } from './types'

type PerformGuessOpts = {
  guess: string
  session: HangmanSession
}

/**
 * The main Hangman game logic. Takes a guess (a letter or a word) and
 * the current state, and returns an updated state
 */
export function performGuess(opts: PerformGuessOpts) {
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
