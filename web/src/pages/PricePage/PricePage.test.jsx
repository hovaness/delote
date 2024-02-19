import { render } from '@redwoodjs/testing/web'

import PricePage from './PricePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PricePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PricePage />)
    }).not.toThrow()
  })
})
