import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import EditEventCell from 'src/components/EditEventCell'
import EventHeaderCell from 'src/components/EventHeaderCell'
import InviteGroup from 'src/components/InviteGroup/InviteGroup'

const EventInvitesPage = ({ id }) => {
  const [isEditEventShowing, setEditEventShowing] = useState(false)

  const toggle = () => {
    setEditEventShowing((prev) => !prev)
  }

  return (
    <>
      <MetaTags title="Invite friends and family" />

      <EventHeaderCell eventId={id} showEditForm={toggle} />

      <InviteGroup eventId={id} />

      <div
        className={`fixed bottom-0 right-0 top-0 z-50 w-3/4 transition-transform duration-500 ${
          isEditEventShowing ? 'translate-x-[0]' : 'translate-x-[120%]'
        }`}
      >
        <EditEventCell eventId={id} handleClose={toggle} />
      </div>
    </>
  )
}

export default EventInvitesPage
