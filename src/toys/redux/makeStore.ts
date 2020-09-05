import { createStore, compose, StoreEnhancer } from 'redux'
import { initialAppState, AppState } from './model'
import { rootReducer } from './rootReducer'

export type MakeStoreOpts = {
  initialState?: AppState
  enhancers?: StoreEnhancer[]
}

export const makeStore = (opts: MakeStoreOpts = {}) => {
  const { initialState, enhancers = [] } = opts

  const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }

  return createStore(
    rootReducer,
    initialState || initialAppState,
    compose(...enhancers)
  )
}
