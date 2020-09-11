import React from 'react'
import { storiesOf } from '@storybook/react'
import { Todo } from './Todo'

// Change this path to put the story in the correct place!
storiesOf('Day 3/JSX/Todo', module).add('version 03 - inline map', () => {
  const chores = ['Do the dishes', 'Take out the trash', 'Make the bed']
  return <Todo chores={chores} />
})
