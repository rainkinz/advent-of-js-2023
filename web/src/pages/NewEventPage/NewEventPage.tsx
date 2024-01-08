import { Form, TextField, Label, DateField } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

const NewEventPage = () => {
  return (
    <>
      <MetaTags title="NewEvent" description="NewEvent page" />

      <div className="auth-form">
        <Form>
          <div className="field">
            <Label name="eventName">Event Name</Label>
            <TextField name="eventName" placeholder="" />
          </div>
          <div className="field">
            <Label name="groupName">Event Date</Label>
            <DateField name="eventDate" placeholder="" />
          </div>
        </Form>
      </div>
    </>
  )
}

export default NewEventPage
