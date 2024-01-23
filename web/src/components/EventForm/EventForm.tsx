import { Form, TextField, Label, DateField } from '@redwoodjs/forms'

import Checkbox from 'src/components/Checkbox/Checkbox'

const EventForm = ({ handleSubmit, loading }) => {
  return (
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
  )
}

export default EventForm
