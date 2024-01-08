import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const EventInvitesPage = () => {
  return (
    <>
      <MetaTags title="EventInvites" description="EventInvites page" />

      <h1>EventInvitesPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/EventInvitesPage/EventInvitesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>eventInvites</code>, link to me with `
        <Link to={routes.eventInvites()}>EventInvites</Link>`
      </p>
    </>
  )
}

export default EventInvitesPage
