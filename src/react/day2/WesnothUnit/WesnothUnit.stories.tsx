import React from 'react'
import { select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { WesnothUnit } from './WesnothUnit'
import { units, unitIds } from '../../../logic/wesnoth'

storiesOf('Day 2/Composition/WesnothUnit', module).add('dropdown knob', () => {
  const unitId = select('Unit', unitIds, 'Blood Bat')
  return <WesnothUnit unit={units[unitId]} />
})
