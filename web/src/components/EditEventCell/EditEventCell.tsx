import type {
  FindEditEventQuery,
  FindEditEventQueryVariables,
} from 'types/graphql'

import {
  type CellSuccessProps,
  type CellFailureProps,
  useMutation,
} from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import EventForm from '../EventForm/EventForm'
import SlideInPanel from '../SlideInPanel/SlideInPanel'

export const QUERY = gql`
  query FindEditEventQuery($eventId: String!) {
    event(id: $eventId) {
      id
      name
      date
      sendReminder
    }
  }
`

export const UPDATE_EVENT_MUTATION = gql`
  mutation updateEventMutation($id: String!, $input: UpdateEventInput!) {
    updateEvent(id: $id, input: $input) {
      id
      name
      date
      sendReminder
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEditEventQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  event,
  handleClose,
}: CellSuccessProps<FindEditEventQuery, FindEditEventQueryVariables> & {
  handleClose: () => void
}) => {
  const [updateEvent, { loading }] = useMutation(UPDATE_EVENT_MUTATION, {
    onCompleted: () => {
      handleClose()
      toast.success('Event was updated')
    },
    onError: (error) => {
      toast.error(error.message)
      console.error(error)
    },
  })

  const handleSubmit = (data) => {
    console.log(data)
    updateEvent({
      variables: {
        id: event.id,
        input: {
          name: data.eventName,
          date: data.eventDate,
          sendReminder: data.eventReminder,
        },
      },
    })
  }

  return (
    <div>
      <SlideInPanel handleClose={handleClose}>
        <h1 className="leading=[0.8] m-0 p-0 font-condensed text-[116px] uppercase text-white">
          Edit Details
        </h1>
        <h2 className="mb-10 font-handwriting text-3xl uppercase text-white">
          Edit the current event
        </h2>
        <EventForm
          handleSubmit={handleSubmit}
          loading={loading}
          defaultValues={{
            eventName: event.name,
            eventDate: event.date,
            eventReminder: event.sendReminder,
          }}
          buttonLabel="Update"
        />
      </SlideInPanel>
    </div>
  )
}
