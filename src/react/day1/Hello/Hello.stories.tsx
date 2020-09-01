import React from 'react'
import { storiesOf } from '@storybook/react'
import { Hello as HelloJSX } from './Hello.Jsx'
import { Hello as HelloVerbose } from './Hello.Verbose'
import { Hello as HelloHyper } from './Hello.Hyper'
import { Hello as HelloReturn } from './Hello.Return'

storiesOf('Day 1/Hello', module)
  .add('jsx version', () => <HelloJSX />)
  .add('verbose version', () => <HelloVerbose />)
  .add('hyper version', () => <HelloHyper />)
  .add('return version', () => <HelloReturn />)
