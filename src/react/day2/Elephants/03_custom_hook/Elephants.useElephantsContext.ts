import { useState } from 'react'
import {
  flipMoodInState,
  addElephantToState,
  initialElephantsState,
} from '../../../../logic/elephants'

export const useElephantsContext = () => {
  const [state, setState] = useState(initialElephantsState)
  const switchMood = () => setState(flipMoodInState(state))
  const fetchElephant = () => setState(addElephantToState(state, 1))
  return {
    state,
    switchMood,
    fetchElephant,
  }
}
