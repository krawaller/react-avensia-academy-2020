import React from 'react'
import { storiesOf } from '@storybook/react'
import { Greeter } from './Greeter'

storiesOf('Day 1/Props/Greeter', module)
  .add('hello avensia', () => {
    const someone = 'Avensia'
    return <Greeter name={someone} />
  })
  .add('hello without name', () => {
    return <Greeter />
  })
