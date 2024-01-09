import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Button from 'src/components/Button/Button'
import Icon from 'src/components/Icon/Icon'

const EventInvitesPage = () => {
  return (
    <>
      <MetaTags title="Invite friends and family" />

      <h3 className="font-handwriting text-4xl uppercase text-white">
        3 Days Until
      </h3>
      <div className="flex items-center gap-3">
        <h1 className="m-0 flex-1 p-0 font-condensed text-[166px] uppercase leading-[0.8] text-white">
          Smith Christmas
        </h1>
        <button className="text-white dark:text-white">
          <Icon id="edit" />
        </button>
        <Button size="small" className="bg-supernova text-black">
          Match
        </Button>
      </div>
    </>
  )
}

export default EventInvitesPage
