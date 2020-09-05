import { ElephantsState, initialElephantsState } from '../elephants'

export type AppState = {
  elephants: ElephantsState
}

export const initialAppState: AppState = {
  elephants: initialElephantsState,
}
