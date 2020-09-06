import React from 'react'
import { render } from '@testing-library/react'
import { WesnothPic } from './WesnothPic'
import { base64 } from '../../../logic/wesnoth'

const picIds = Object.keys(base64).sort()

describe('the WesnothPic component', () => {
  it('renders as expected', () => {
    const { container } = render(<WesnothPic id={picIds[0]} />)
    expect(container).toMatchSnapshot()
  })
})
