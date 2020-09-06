import { useReducer } from 'react'
import {
  flipElephantMood,
  addElephant,
  initialElephantsState,
  elephantsReducer,
} from '../../../../logic/elephants'

export const useElephantsContext = () => {
  const [state, dispatch] = useReducer(elephantsReducer, initialElephantsState)
  const switchMood = () => dispatch(flipElephantMood())
  const fetchElephant = () => dispatch(addElephant(1))
  return {
    state,
    switchMood,
    fetchElephant,
  }
}
