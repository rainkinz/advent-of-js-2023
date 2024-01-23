import { MetaTags } from '@redwoodjs/web'

import EditEventCell from 'src/components/EditEventCell'
import EventHeaderCell from 'src/components/EventHeaderCell'
import InviteGroup from 'src/components/InviteGroup/InviteGroup'

const EventInvitesPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Invite friends and family" />

      <EventHeaderCell eventId={id} />

      <InviteGroup eventId={id} />

      <EditEventCell eventId={id} />
    </>
  )
}

export default EventInvitesPage
