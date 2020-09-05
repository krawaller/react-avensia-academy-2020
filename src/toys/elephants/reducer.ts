import { ElephantsState, initialElephantsState } from './model'
import { isAddElephantAction, isFlipElephantMoodAction } from './actions'
import { addElephantToState } from './addElephantToState'
import { flipMoodInState } from './flipMoodInState'

export const elephantsReducer = (
  state: ElephantsState | undefined = initialElephantsState,
  action: any
): ElephantsState => {
  if (isAddElephantAction(action)) {
    return addElephantToState(state, action.number)
  }
  if (isFlipElephantMoodAction(action)) {
    return flipMoodInState(state)
  }
  return state // unrecognised action, so we return the current state
}

// Alternative implementation using switch-case instead of guards:

import { ADD_ELEPHANT, FLIP_ELEPHANT_MOOD, ElephantsAction } from './actions'

const elephantsReducer2 = (
  state: ElephantsState | undefined = initialElephantsState,
  action: ElephantsAction
): ElephantsState => {
  switch (action.type) {
    case ADD_ELEPHANT:
      return addElephantToState(state, action.number)
    case FLIP_ELEPHANT_MOOD:
      return flipMoodInState(state)
    default:
      return state
  }
}
