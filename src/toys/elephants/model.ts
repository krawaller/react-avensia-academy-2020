export type ElephantsState = {
  count: number
  mood: 'calm' | 'happy'
}

export const initialState: ElephantsState = {
  count: 1,
  mood: 'calm',
}
