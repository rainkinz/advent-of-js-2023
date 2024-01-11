import type { ListInvitesQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Card from '../Card/Card'

export const QUERY = gql`
  query ListInvitesQuery($eventId: String!) {
    event(id: $eventId) {
      name
      sendReminder
      date
      invites {
        id
        email
        name
        user {
          avatar
          name
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ event }: CellSuccessProps<ListInvitesQuery>) => {
  return (
    <div className="grid grid-cols-2 gap-x-12 gap-y-8">
      {event.invites.map((invite) => {
        return (
          <Card
            key={invite.id}
            avatar={{
              alt: invite?.user?.name,
              avatar: invite?.user?.avatar,
              letter: invite.name.split('')[0],
            }}
            email={invite.email}
            name={invite.name}
          />
        )
      })}
    </div>
  )
}
