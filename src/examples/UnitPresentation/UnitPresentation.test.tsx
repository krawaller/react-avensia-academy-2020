import React from 'react'
import { render } from '@testing-library/react'
import { UnitPresentation } from './UnitPresentation'
import { units } from '../../toys/wesnoth'

describe('the UnitPresentation component', () => {
  it('renders as expected', () => {
    const { container } = render(<UnitPresentation unit={units.Assassin} />)
    expect(container).toMatchSnapshot()
  })
})
