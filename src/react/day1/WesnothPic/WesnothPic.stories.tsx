import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { WesnothPic } from './WesnothPic'
import { base64 } from '../../../toys/wesnoth'

const picIds = Object.keys(base64).sort()

storiesOf('Day 1/Composition/WesnothPic', module).add('dropdown knob', () => {
  const picId = select('Picture', picIds, 'attacks/axe-deathblade.png')
  return <WesnothPic id={picId} />
})
