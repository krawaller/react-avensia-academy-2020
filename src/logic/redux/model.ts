import { ElephantsState, initialElephantsState } from '../elephants'
import { HangmanState, initialHangmanState } from '../hangman'

export type AppState = {
  elephants: ElephantsState
  hangman: HangmanState
}

export const initialAppState: AppState = {
  elephants: initialElephantsState,
  hangman: initialHangmanState,
}
