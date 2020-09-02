import React from 'react'
import { storiesOf } from '@storybook/react'
import { Mirror } from './Mirror'

storiesOf('day 1/Props/Mirror', module)
  .add('truthful', () => <Mirror truthful />) // same as <Mirror truthful={true} />
  .add('lying', () => <Mirror />) // same as <Mirror truthful={false} />
