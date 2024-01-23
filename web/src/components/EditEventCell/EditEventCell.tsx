import type {
  FindEditEventQuery,
  FindEditEventQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEditEventQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  event,
}: CellSuccessProps<FindEditEventQuery, FindEditEventQueryVariables>) => {
  console.log(event)

  return (
    <div>
      <SlideInPanel handleClose={undefined}>
        <h1 className="leading=[0.8] m-0 p-0 font-condensed text-[116px] uppercase text-white">
          Edit Details
        </h1>
        <h2 className="mb-10 font-handwriting text-3xl uppercase text-white">
          Edit the current event
        </h2>
        <EventForm
          handleSubmit={undefined}
          loading={undefined}
          defaultValues={{
            eventName: event.name,
            eventDate: event.date,
            eventReminder: event.sendReminder,
          }}
        />
      </SlideInPanel>
    </div>
  )
}
