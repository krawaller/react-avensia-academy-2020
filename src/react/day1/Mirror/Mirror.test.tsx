import React from 'react'
import { render } from '@testing-library/react'
import { Mirror } from './Mirror'

describe('the Mirror component', () => {
  describe('using logical testing', () => {
    it('mentions snow white when truthful', () => {
      const { queryAllByText } = render(<Mirror truthful />)
      expect(queryAllByText(/snow ?white/i)).toBeTruthy()
      expect(queryAllByText('you')).toBeFalsy()
    })
    it('mentions "you" when lying', () => {
      const { queryAllByText } = render(<Mirror />)
      expect(queryAllByText('you')).toBeTruthy()
      expect(queryAllByText(/snow ?white/i)).toBeFalsy()
    })
  })
  describe('using snapshot testing', () => {
    it('renders as expected when lying', () => {
      const { container } = render(<Mirror />)
      expect(container).toMatchSnapshot()
    })
    it('renders as expected when truthful', () => {
      const { container } = render(<Mirror truthful />)
      expect(container).toMatchSnapshot()
    })
  })
})
