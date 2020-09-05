import React, { useState } from 'react'
import {
  flipMoodInState,
  addElephantToState,
  makeLyrics,
  initialState,
} from '../../../../toys/elephants'

export const Elephants = () => {
  const [state, setState] = useState(initialState)

  const switchMood = () => setState(flipMoodInState(state))
  const fetchElephant = () => setState(addElephantToState(state))

  const song = makeLyrics(state)

  return (
    <div>
      <button onClick={switchMood}>Flip mood</button>{' '}
      <button onClick={fetchElephant}>Fetch elephant</button>
      <hr />
      {song.map((line, n) => (
        <div key={n}>{line}</div>
      ))}
    </div>
  )
}
