import React from 'react'
import { storiesOf } from '@storybook/react'
import { Carolus as CarolusGlobal } from './Carolus.Global'
import { Carolus as CarolusModule } from './Carolus.Module'
import { Carolus as CarolusInline } from './Carolus.Inline'
import { Carolus as CarolusGlitz } from './Carolus.Glitz'

storiesOf('Day 3/Styling/Carolus', module)
  .add('global CSS', () => <CarolusGlobal />)
  .add('module', () => <CarolusModule />)
  .add('inline', () => <CarolusInline />)
  .add('glitz', () => <CarolusGlitz />)
