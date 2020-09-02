import React from 'react'

export type GreeterProps = {
  name?: string
}

export const Greeter = (props: GreeterProps) => (
  <div>Hello {props.name || 'world'}!</div>
)
