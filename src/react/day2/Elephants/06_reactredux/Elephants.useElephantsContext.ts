import { useSelector, useDispatch } from 'react-redux'
import { flipElephantMood, addElephant } from '../../../../logic/elephants'
import { selectElephantsState } from '../../../../logic/redux'

export const useElephantsContext = () => {
  const state = useSelector(selectElephantsState)
  const dispatch = useDispatch()
  const switchMood = () => dispatch(flipElephantMood())
  const fetchElephant = () => dispatch(addElephant(1))
  return {
    state,
    switchMood,
    fetchElephant,
  }
}
