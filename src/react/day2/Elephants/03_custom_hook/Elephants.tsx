import React from 'react'
import { makeLyrics } from '../../../../logic/elephants'

import { useElephantsContext } from './Elephants.useElephantsContext'

export const Elephants = () => {
  const { state, fetchElephant, switchMood } = useElephantsContext()

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
