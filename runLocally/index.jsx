import React from 'react'
import ReactDOM from 'react-dom'

import { GlitzClient } from '@glitz/core'
import { GlitzProvider } from '@glitz/react'
import { glitzOptions } from '../glitz.options'
let glitz = new GlitzClient(glitzOptions)

/*
To run a component locally, simply...

- change the code below to render the component you want to test
- execute `npm run start` in the terminal
- go to `http://localhost:1234` in the browser (will open automatically)
- make changes to the code and the browser will immediately update!
*/

import { Hello } from '../src/react/day1/Hello/Hello.Jsx'

ReactDOM.render(
  <Hello />,

  document.getElementById('root')
)
