import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Button from 'src/components/Button/Button'
import Icon from 'src/components/Icon/Icon'

const EventInvitesPage = () => {
  return (
    <>
      <MetaTags title="Invite friends and family" />

      <h3>3 Days Until</h3>
      <h1>Smith Christmas</h1>

      <button>
        <Icon id="edit" />
      </button>
      <Button size="small" className="bg-supernova text-black">
        Match
      </Button>
    </>
  )
}

export default EventInvitesPage
