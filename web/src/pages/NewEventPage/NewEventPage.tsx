import { Form, TextField, Label, DateField } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

import Checkbox from 'src/components/Checkbox/Checkbox'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'

const NewEventPage = () => {
  const handleSubmit = (data) => {
    console.log({ data })
  }
  return (
    <>
      <MetaTags title="Setup your event" />

      <HeaderWithRulers className="text-white" heading="Setup your event" />
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
