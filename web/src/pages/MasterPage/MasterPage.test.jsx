import { render } from '@redwoodjs/testing/web'

import MasterPage from './MasterPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MasterPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MasterPage />)
    }).not.toThrow()
  })
})
