import React from 'react'
import { render } from '@testing-library/react'
import { HelloSomeone } from './HelloSomeone'

describe('the HelloWorld component', () => {
  it('renders the given name', () => {
    const name = 'Knork'
    const { queryAllByText } = render(<HelloSomeone name={name} />)

    expect(queryAllByText(`Hello ${name}`)).toBeTruthy()
  })
  it('uses "world" as fallback', () => {
    const { queryAllByText } = render(<HelloSomeone />)

    expect(queryAllByText(`Hello world`)).toBeTruthy()
  })
})
