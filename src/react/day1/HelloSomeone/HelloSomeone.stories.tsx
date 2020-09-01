import { HelloSomeone } from './HelloSomeone'
import { makeStory } from '../../../utils'

// This default export determines where you story goes in the story list
export default {
  title: 'Day 1/Props/HelloSomeone',
  component: HelloSomeone,
}

export const HelloAvensia = makeStory(HelloSomeone, {
  name: 'Avensia',
})
