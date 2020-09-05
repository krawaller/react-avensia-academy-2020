import { ElephantsState } from './model'

export const addElephantToState = (
  state: ElephantsState,
  num = 1
): ElephantsState => ({
  ...state,
  count: state.count + num,
})
