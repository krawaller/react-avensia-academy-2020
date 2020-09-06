// Action creators, to be used with the reducer

import { NewSessionStateOpts } from './newSessionState'

// Type, creator and guard for newSession action creator
export const NEW_SESSION = 'HANGMAN::NEW_SESSION'
export const newHangmanSession = (opts: NewSessionStateOpts) =>
  ({
    type: NEW_SESSION,
    opts,
  } as const)
export type NewHangmanSessionAction = ReturnType<typeof newHangmanSession>
export const isNewHangmanSessionAction = (
  action: any
): action is NewHangmanSessionAction => action?.type === NEW_SESSION

// Type, creator and guard for performGuess action creator
export const PERFORM_GUESS = 'HANGMAN::PERFORM_GUESS'
export const performGuess = (guess: string) =>
  ({
    type: PERFORM_GUESS,
    guess,
  } as const)
export type PerformGuessAction = ReturnType<typeof performGuess>
export const isPerformGuessAction = (
  action: any
): action is PerformGuessAction => action?.type === PERFORM_GUESS

// Aggregate stuff

export type HangmanAction = NewHangmanSessionAction | PerformGuessAction
