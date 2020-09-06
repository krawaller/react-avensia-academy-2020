export type ElephantsState = {
  count: number
  mood: 'calm' | 'happy'
}

export const initialElephantsState: ElephantsState = {
  count: 1,
  mood: 'calm',
}
