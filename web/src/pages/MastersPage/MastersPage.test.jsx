import { render } from '@redwoodjs/testing/web'

import MastersPage from './MastersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MastersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MastersPage />)
    }).not.toThrow()
  })
})
