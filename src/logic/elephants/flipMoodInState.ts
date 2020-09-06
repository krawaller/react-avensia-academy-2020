import { ElephantsState } from './model'

export const flipMoodInState = (state: ElephantsState): ElephantsState => ({
  ...state,
  mood: state.mood === 'calm' ? 'happy' : 'calm',
})
