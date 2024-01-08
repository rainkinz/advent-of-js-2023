import { render } from '@redwoodjs/testing/web'

import EventInvitesPage from './EventInvitesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EventInvitesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventInvitesPage />)
    }).not.toThrow()
  })
})
