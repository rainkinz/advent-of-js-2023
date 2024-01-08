import { Form, TextField, Label, DateField } from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'

import Checkbox from 'src/components/Checkbox/Checkbox'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'

const CREATE_EVENT_MUTATION = gql`
  mutation createEventMutation(
    $name: String!
    $date: DateTime!
    $sendReminder: Boolean!
  ) {
    createEvent(
      input: {
        userId: 1
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
  const [createEvent, createEventStatus] = useMutation(CREATE_EVENT_MUTATION)

  const handleSubmit = (data) => {
    console.log({ data })
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
        <Form onSubmit={handleSubmit}>
          <div className="field">
            <Label name="eventName">Event Name</Label>
            <TextField name="eventName" placeholder="" />
          </div>
          <div className="field">
            <Label name="groupName">Event Date</Label>
            <DateField name="eventDate" placeholder="" />
          </div>
          <div className="field">
            <Checkbox
              name="eventReminder"
              label="Send out a reminder for an event"
            />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </div>
    </>
  )
}

export default NewEventPage
