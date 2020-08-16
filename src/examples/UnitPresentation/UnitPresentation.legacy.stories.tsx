import React from 'react'
import { select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { UnitPresentation } from './UnitPresentation'
import { units, unitIds } from '../../toys/wesnoth'

// Old stories syntax, to use legacy knobs with select which isn't supported in new controls yet

storiesOf('React/Intro/UnitPresentation', module).add('dropdown knob', () => {
  const unitId = select('Unit', unitIds, 'Blood Bat')
  return <UnitPresentation unit={units[unitId]} />
})
