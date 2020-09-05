import { combineReducers } from 'redux'
import { AppState } from './model'
import { elephantsReducer } from '../elephants'

export const rootReducer = combineReducers<AppState>({
  elephants: elephantsReducer,
})
