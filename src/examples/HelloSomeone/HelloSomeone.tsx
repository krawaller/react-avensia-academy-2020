import React from 'react'

export type HelloSomeoneProps = {
  name?: string
}

export const HelloSomeone = (props: HelloSomeoneProps) => (
  <div>Hello {props.name || 'world'}!</div>
)
