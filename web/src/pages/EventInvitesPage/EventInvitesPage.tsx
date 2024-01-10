import { MetaTags } from '@redwoodjs/web'

import EventHeaderCell from 'src/components/EventHeaderCell'
import InviteGroup from 'src/components/InviteGroup/InviteGroup'

const EventInvitesPage = () => {
  return (
    <>
      <MetaTags title="Invite friends and family" />

      <EventHeaderCell id="1" />

      <InviteGroup />
    </>
  )
}

export default EventInvitesPage
