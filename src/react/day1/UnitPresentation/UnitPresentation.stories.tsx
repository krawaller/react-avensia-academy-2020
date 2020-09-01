import { UnitPresentation } from './UnitPresentation'
import { makeStory } from '../../../utils'
import { units } from '../../../toys/wesnoth'

export default {
  title: 'Day 1/Props/UnitPresentation',
  component: UnitPresentation,
}

export const Bat = makeStory(UnitPresentation, { unit: units['Blood Bat'] })
export const WoseSapling = makeStory(UnitPresentation, {
  unit: units['Wose Sapling'],
})
export const OrcishGrunt = makeStory(UnitPresentation, {
  unit: units['Orcish Grunt'],
})
