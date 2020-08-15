import { UnitPresentation } from './UnitPresentation'
import { makeStory } from '../../utils'
import { units } from '../../data/wesnoth'

const bloodBat = units['Blood Bat']
const woseSapling = units['Wose Sapling']
const orcishGrunt = units['Orcish Grunt']

// This default export determines where you story goes in the story list
export default {
  title: 'React/Intro/UnitPresentation',
  component: UnitPresentation,
}

export const Bat = makeStory(UnitPresentation, { unit: bloodBat })
export const WoseSapling = makeStory(UnitPresentation, { unit: woseSapling })
export const OrcishGrunt = makeStory(UnitPresentation, { unit: orcishGrunt })
