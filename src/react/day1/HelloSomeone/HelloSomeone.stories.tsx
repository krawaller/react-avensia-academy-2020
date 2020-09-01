import { HelloSomeone } from './HelloSomeone'
import { makeStory } from '../../../utils'

// This default export determines where you story goes in the story list
export default {
  title: 'React/Intro/HelloSomeone',
  component: HelloSomeone,
}

export const HelloAvensia = makeStory(HelloSomeone, {
  name: 'Avensia',
})
