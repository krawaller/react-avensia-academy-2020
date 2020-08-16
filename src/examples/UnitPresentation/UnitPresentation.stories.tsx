import { UnitPresentation } from './UnitPresentation'
import { makeStory } from '../../utils'
import { units } from '../../data/wesnoth'

export default {
  title: 'React/Intro/UnitPresentation',
  component: UnitPresentation,
}

export const Bat = makeStory(UnitPresentation, { unit: units['Blood Bat'] })
export const WoseSapling = makeStory(UnitPresentation, {
  unit: units['Wose Sapling'],
})
export const OrcishGrunt = makeStory(UnitPresentation, {
  unit: units['Orcish Grunt'],
})
