import React from 'react'
import { Provider } from 'react-redux'
import { GlitzClient } from '@glitz/core'
import { GlitzProvider } from '@glitz/react'
import { glitzOptions } from '../glitz.options'
import { store } from '../src/toys/redux/store'

const glitz = new GlitzClient(glitzOptions)

export const decorators = [
  (Story) => (
    <GlitzProvider glitz={glitz}>
      <Provider store={store}>
        <Story />
      </Provider>
    </GlitzProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
