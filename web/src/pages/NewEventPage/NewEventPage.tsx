import { Form, TextField, Label, DateField } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

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
  const [createEvent, { loading }] = useMutation(CREATE_EVENT_MUTATION, {
    onError: (error) => {
      console.log(error)
      toast.error(error.message)
    },
    onSuccess: () => {
      toast.success('Event was successfully created')
      navigate(routes.eventInvites())
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
        <Form onSubmit={handleSubmit}>
          <fieldset disabled={loading}>
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
          </fieldset>
        </Form>
      </div>
    </>
  )
}

export default NewEventPage
