import { UnitPresentation } from './UnitPresentation'
import { makeStory } from '../../utils'
import { units, unitIds } from '../../data/wesnoth'
import { select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

const bloodBat = units['Blood Bat']
const woseSapling = units['Wose Sapling']

// This default export determines where you story goes in the story list
export default {
  title: 'React/Intro/UnitPresentation',
  component: UnitPresentation,
  argTypes: {
    unit: {
      type: 'select',
      option: [bloodBat, woseSapling],
    },
  },
}

export const Bat = makeStory(UnitPresentation, { unit: bloodBat })

// Old stories syntax, to use legacy knobs

storiesOf('React/Intro/UnitPresentation', module).add('dropdown select', () => {
  const unitId = select('Unit', unitIds, 'Blood Bat')
  return <UnitPresentation unit={units[unitId]} />
})
