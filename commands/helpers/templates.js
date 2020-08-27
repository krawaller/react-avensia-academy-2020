const compTemplate = `import React from 'react'

export type NAMEProps = {}

export const NAME = (props: NAMEProps) => {
  return <div>Make something pretty! :D</div>
}
`

const testTemplate = `import React from 'react'
import { render } from '@testing-library/react'
import { NAME } from './NAME'

describe('the NAME component', () => {
  it('renders as expected', () => {
    const { container } = render(<NAME />)
    expect(container).toMatchSnapshot()
  })
})
`

const legacyStoryTemplate = `import React from 'react'
import { storiesOf } from '@storybook/react'
import { NAME } from './NAME'

// Change this path to put the story in the correct place!
storiesOf('componentes/NAME', module).add('basic usage', () => {
  return <NAME />
})
`

const indexTemplate = `export * from './NAME'
`

module.exports = {
  indexTemplate,
  legacyStoryTemplate,
  testTemplate,
  compTemplate,
}
