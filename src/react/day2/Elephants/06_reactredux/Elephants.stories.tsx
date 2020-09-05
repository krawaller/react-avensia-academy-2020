import React from 'react'
import { storiesOf } from '@storybook/react'
import { Elephants } from './Elephants'

storiesOf('Day 2/State/Elephants', module).add(
  'version 06 - reactredux',
  () => {
    return <Elephants />
  }
)
