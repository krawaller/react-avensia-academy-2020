import { useState } from 'react'

import {
  flipMoodInState,
  addElephantToState,
  initialState,
} from '../../../../toys/elephants'

export const useElephantsState = () => {
  const [state, setState] = useState(initialState)

  const switchMood = () => setState(flipMoodInState(state))
  const fetchElephant = () => setState(addElephantToState(state))
  return {
    state,
    switchMood,
    fetchElephant,
  }
}
