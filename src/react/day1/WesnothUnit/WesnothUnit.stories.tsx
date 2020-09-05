import React from 'react'
import { select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { WesnothUnit } from './WesnothUnit'
import { units, unitIds } from '../../../toys/wesnoth'

storiesOf('Day 1/Composition/WesnothUnit', module).add('dropdown knob', () => {
  const unitId = select('Unit', unitIds, 'Blood Bat')
  return <WesnothUnit unit={units[unitId]} />
})