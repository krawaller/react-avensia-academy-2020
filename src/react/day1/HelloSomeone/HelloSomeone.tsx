import React from 'react'
import { styled } from '@glitz/react'

const Red = styled.div({ backgroundColor: 'blue', color: 'yellow' })

export type HelloSomeoneProps = {
  name?: string
}

export const HelloSomeone = (props: HelloSomeoneProps) => (
  <Red>Hello {props.name || 'world'}!</Red>
)
