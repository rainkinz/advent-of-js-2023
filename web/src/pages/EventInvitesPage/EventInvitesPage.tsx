import { MetaTags } from '@redwoodjs/web'

import EventHeaderCell from 'src/components/EventHeaderCell'
import InviteGroup from 'src/components/InviteGroup/InviteGroup'

const EventInvitesPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Invite friends and family" />

      <EventHeaderCell eventId={id} />

      <InviteGroup eventId={id} />
    </>
  )
}

export default EventInvitesPage
