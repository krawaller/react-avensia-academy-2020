import React from 'react'

export type MirrorProps = {
  truthful?: boolean
}

export const Mirror = (props: MirrorProps) => {
  if (props.truthful) {
    return <p>The fairest in the land is Snow white!</p>
  } else {
    return <p>The fairest in the land is you my queen!</p>
  }
}

// ---- OTHER IMPLEMENTATION POSSIBILITIES -------

const Mirror2 = (props: MirrorProps) => {
  const fairest = props.truthful ? 'Snow white' : 'you my queen'
  return <p>The fairest in the land is {fairest}!</p>
}

const Mirror3 = ({ truthful }: MirrorProps) => (
  <p>The fairest in the land is {truthful ? 'Snow white' : 'you my queen'}!</p>
)
