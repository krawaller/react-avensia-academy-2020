import React from 'react'
import { render } from '@testing-library/react'
import { Greeter } from './Greeter'

describe('the Greeter component', () => {
  it('renders the given name', () => {
    const name = 'Knork'
    const { queryAllByText } = render(<Greeter name={name} />)

    expect(queryAllByText(`Hello ${name}`)).toBeTruthy()
  })
  it('uses "world" as fallback', () => {
    const { queryAllByText } = render(<Greeter />)

    expect(queryAllByText(`Hello world`)).toBeTruthy()
  })
})
