import { Form, TextField, Label, DateField } from '@redwoodjs/forms'

import Checkbox from 'src/components/Checkbox/Checkbox'
import { formatDateFromDBForInput } from 'src/helpers/dateHelpers'

interface EventFormProps {
  handleSubmit: ({ data }) => void
  loading: boolean
  buttonLabel: string
  defaultValues?: {
    eventName?: string
    eventDate?: Date
    eventReminder?: boolean
  }
}

const EventForm = ({
  handleSubmit,
  loading,
  defaultValues = {},
  buttonLabel = 'Submit',
}: EventFormProps) => {
  return (
    <Form onSubmit={handleSubmit}>
      <fieldset disabled={loading}>
        <div className="field">
          <Label name="eventName">Event Name</Label>
          <TextField
            name="eventName"
            placeholder=""
            defaultValue={defaultValues.eventName}
          />
        </div>
        <div className="field">
          <Label name="groupName">Event Date</Label>
          <DateField
            name="eventDate"
            placeholder=""
            defaultValue={formatDateFromDBForInput(defaultValues.eventDate)}
          />
        </div>
        <div className="field">
          <Checkbox
            name="eventReminder"
            label="Send out a reminder for an event"
            defaultChecked={defaultValues.eventReminder}
          />
        </div>

        <button type="submit">{buttonLabel}</button>
      </fieldset>
    </Form>
  )
}

export default EventForm
