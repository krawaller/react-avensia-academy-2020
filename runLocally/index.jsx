import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from '../src/toys/redux/store'

import { GlitzClient } from '@glitz/core'
import { GlitzProvider } from '@glitz/react'
import { glitzOptions } from '../glitz.options'
const glitz = new GlitzClient(glitzOptions)

/*
To run a component locally, simply...

- change the code below to render the component you want to test
- execute `npm run start` in the terminal
- go to `http://localhost:1234` in the browser (will open automatically)
- make changes to the code and the browser will immediately update!
*/

import { Carolus } from '../src/react/day1/Carolus/Carolus.Glitz'
const jsx = <Carolus />

ReactDOM.render(
  <GlitzProvider glitz={glitz}>
    <Provider store={store}>{jsx}</Provider>
  </GlitzProvider>,
  document.getElementById('root')
)
