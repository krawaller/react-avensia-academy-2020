import React from 'react'
import { styled } from '@glitz/react'

const Swedish = styled.div({
  backgroundColor: 'gold',
  border: {
    xy: {
      // x is left and right, y is top and bottom, so xy is both!
      style: 'solid',
      width: '3px',
      color: 'blue',
    },
  },
  padding: {
    xy: '3px',
  },
  display: 'inline-block',
  ':hover': {
    backgroundColor: 'yellow',
  },
})

export const Carolus = () => {
  return (
    <Swedish>
      Över Norden jag härskar
      <br />
      Med det arv som jag gavs
      <br />
      Gång på gång
      <br />
      Sjung Carolus sång
    </Swedish>
  )
}
