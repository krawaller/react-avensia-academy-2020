import { combineReducers } from 'redux'
import { AppState } from './model'
import { elephantsReducer } from '../elephants'
import { hangmanReducer } from '../hangman'

export const rootReducer = combineReducers<AppState>({
  elephants: elephantsReducer,
  hangman: hangmanReducer,
})
