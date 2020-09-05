import React, { useState } from 'react'

type ElephantsState = {
  count: number
  mood: 'calm' | 'happy'
}

const initialState: ElephantsState = {
  count: 1,
  mood: 'calm',
}

export const Elephants = () => {
  const [state, setState] = useState(initialState)
  const { count, mood } = state

  const switchMood = () =>
    setState({
      ...state,
      mood: mood === 'calm' ? 'happy' : 'calm',
    })
  const fetchElephant = () =>
    setState({
      ...state,
      count: count + 1,
    })
  const noun = `elefant${count > 1 ? 'er' : ''}`
  const adjective = `${mood === 'calm' ? 'lugn' : 'glad'}${
    count > 1 ? 'a' : ''
  }`
  const pronoun = count > 1 ? 'de' : 'hon'
  const verb = mood === 'calm' ? 'balanserade' : 'hoppetistudsade'
  const adverb = mood === 'calm' ? 'rätt så intressant' : 'superintressant'
  return (
    <div>
      <button onClick={switchMood}>Flip mood</button>{' '}
      <button onClick={fetchElephant}>Fetch elephant</button>
      <hr />
      {count} {adjective} {noun} {verb}
      <br />
      På en liten liten spindeltråååååd <br />
      Det tyckte {pronoun} var {adverb} <br />
      Så {pronoun} gick och hämtade en annan elefant
    </div>
  )
}
