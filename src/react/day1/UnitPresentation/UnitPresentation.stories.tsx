import React from 'react'
import { select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { UnitPresentation } from './UnitPresentation'
import { units, unitIds } from '../../../toys/wesnoth'

storiesOf('Day 1/Props/UnitPresentation', module).add('dropdown knob', () => {
  const unitId = select('Unit', unitIds, 'Blood Bat')
  return <UnitPresentation unit={units[unitId]} />
})
