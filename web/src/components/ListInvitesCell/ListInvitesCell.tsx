import type { ListInvitesQuery } from 'types/graphql'

import {
  type CellSuccessProps,
  type CellFailureProps,
  useMutation,
} from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

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

export const DELETE_INVITE_MUTATION = gql`
  mutation DeleteInviteMutation($inviteId: String!) {
    deleteInvite(id: $inviteId) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ event }: CellSuccessProps<ListInvitesQuery>) => {
  const [deleteInvite] = useMutation(DELETE_INVITE_MUTATION, {
    onCompleted: () => {
      toast.success('Invite deleted')
    },
    onError: (error) => {
      toast.error(error.message)
      console.error(error)
    },
    refetchQueries: [QUERY],
  })

  const handleDelete = (inviteId) => {
    deleteInvite({ variables: { inviteId } })
  }

  return (
    <div className="grid grid-cols-2 gap-x-12 gap-y-8">
      {event.invites.map((invite) => (
        <Card
          key={invite.id}
          avatar={{
            alt: invite?.user?.name,
            avatar: invite?.user?.avatar,
            letter: invite.name.split('')[0],
          }}
          email={invite.email}
          name={invite.name}
          isCloseShowing={true}
          handleClose={() => handleDelete(invite.id)}
        />
      ))}
    </div>
  )
}
