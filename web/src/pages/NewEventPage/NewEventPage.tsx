import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import EventForm from 'src/components/EventForm/EventForm'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'

const CREATE_EVENT_MUTATION = gql`
  mutation createEventMutation(
    $name: String!
    $date: DateTime!
    $sendReminder: Boolean!
  ) {
    createEvent(
      input: {
        userId: "1"
        sendReminder: $sendReminder
        date: $date
        name: $name
      }
    ) {
      id
      name
      date
    }
  }
`

const NewEventPage = () => {
  const [createEvent, { loading }] = useMutation(CREATE_EVENT_MUTATION, {
    onError: (error) => {
      console.log(error)
      toast.error(error.message)
    },
    onCompleted: (data) => {
      toast.success('Event was successfully created')
      navigate(routes.eventInvites({ id: data.createEvent.id }))
    },
  })

  const handleSubmit = (data) => {
    createEvent({
      variables: {
        name: data.eventName,
        date: data.eventDate,
        sendReminder: data.eventReminder,
      },
    })
  }

  return (
    <>
      <MetaTags title="Setup your event" />

      <HeaderWithRulers className="text-white" heading="Set up your event" />
      <div className="auth-form">
        <EventForm handleSubmit={handleSubmit} loading={loading} />
      </div>
    </>
  )
}

export default NewEventPage
