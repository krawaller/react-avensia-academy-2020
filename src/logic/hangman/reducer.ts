import { HangmanState, initialHangmanState } from './model'
import { isNewHangmanSessionAction, isPerformGuessAction } from './actions'
import { addGuessToSession } from './addGuessToSession'
import { newSessionState } from './newSessionState'

export const hangmanReducer = (
  state: HangmanState | undefined = initialHangmanState,
  action: any
): HangmanState => {
  const { session } = state
  if (isPerformGuessAction(action) && session) {
    const { guess } = action
    return {
      session: addGuessToSession({ session, guess }),
    }
  }
  if (isNewHangmanSessionAction(action)) {
    return {
      session: newSessionState(action.opts),
    }
  }
  return state
}
