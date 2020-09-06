import { useState, useEffect } from 'react'
import { flipElephantMood, addElephant } from '../../../../logic/elephants'
import { store } from '../../../../logic/redux'

export const useElephantsContext = () => {
  const [state, setState] = useState(store.getState().elephants)

  // this effect will only be run when component is first rendered
  useEffect(() => {
    // whenever there is new state in the store, we steal it to this component
    store.subscribe(() => setState(store.getState().elephants))
  }, [])

  const switchMood = () => store.dispatch(flipElephantMood())
  const fetchElephant = () => store.dispatch(addElephant(1))
  return {
    state,
    switchMood,
    fetchElephant,
  }
}
