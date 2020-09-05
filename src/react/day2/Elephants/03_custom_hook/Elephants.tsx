import React from 'react'
import { makeLyrics } from '../../../../toys/elephants'

import { useElephantsState } from './Elephants.useElephantsState'

export const Elephants = () => {
  const { state, fetchElephant, switchMood } = useElephantsState()

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
