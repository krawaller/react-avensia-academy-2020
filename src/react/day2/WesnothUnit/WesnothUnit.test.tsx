import React from 'react'
import { render } from '@testing-library/react'
import { WesnothUnit } from './WesnothUnit'
import { units } from '../../../logic/wesnoth'

describe('the WesnothUnit component', () => {
  it('renders as expected', () => {
    const { container } = render(<WesnothUnit unit={units.Assassin} />)
    expect(container).toMatchSnapshot()
  })
})
