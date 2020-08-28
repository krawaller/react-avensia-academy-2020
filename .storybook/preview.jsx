import React from 'react'
import { GlitzClient } from '@glitz/core'
import { GlitzProvider } from '@glitz/react'
import { glitzOptions } from '../glitz.options'

let glitz = new GlitzClient(glitzOptions)

export const decorators = [
  (Story) => (
    <GlitzProvider glitz={glitz}>
      <Story />
    </GlitzProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
