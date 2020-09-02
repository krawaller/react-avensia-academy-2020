import { Greeter } from './Greeter'
import { makeStory } from '../../../utils'

// These stories are defined using newer storybook API! Scope uses the old API, which you can find
// examples of in all other components.

export default {
  title: 'Day 1/Props/Greeter',
  component: Greeter,
}

export const HelloAvensia = makeStory(Greeter, {
  name: 'Avensia',
})

export const HelloNobody = makeStory(Greeter, {})
