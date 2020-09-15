import React from 'react'
import { ElephantsState, makeLyrics } from '../../../../logic/elephants'
import { elephantConnector } from './Elephants.connector'

type ElephantsInnerProps = {
  state: ElephantsState
  fetchElephant: () => void
  switchMood: () => void
}

const ElephantsInner = (props: ElephantsInnerProps) => {
  const { state, fetchElephant, switchMood } = props

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

export const Elephants = elephantConnector(ElephantsInner)
