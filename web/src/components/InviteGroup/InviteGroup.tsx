import { EmailField, Form, Label, TextField } from '@redwoodjs/forms'

import Card from '../Card/Card'
import RoundButton from '../RoundButton/RoundButton'

const CREATE_INVITE_MUTATION = gql`
  mutation createInviteMutation {
    createInvite(
      input: {
        eventId: "1"
        userId: "1"
        status: INVITED
        email: "brendan@example.com"
        name: "brendan"
      }
    ) {
      id
    }
  }
`

const InviteGroup = () => {
  const handleSubmit = (data) => {
    console.log(data)
  }
  return (
    <div>
      <div className="label ml-5">Invite a friend or family member</div>
      <div className="mb-10 ml-5 flex items-center gap-5 bg-spanishGreen p-4">
        <Form onSubmit={handleSubmit}>
          <div className="field flex-1">
            <Label name="name">Name</Label>
            <TextField name="name" className="input" placeholder="" />
          </div>
          <div className="field flex-1">
            <Label name="email">Email</Label>
            <EmailField name="email" className="input" placeholder="" />
          </div>
          <RoundButton status="warning" type="submit" />
        </Form>
      </div>

      <div className="grid grid-cols-2 gap-x-12 gap-y-8">
        <Card
          avatar={{
            alt: 'Avatar',
            avatar: 'https://picsum.photos/seed/1701322447715/300/300',
          }}
          email="email@email.com"
          name="Amy Dutton"
        />
        <Card
          avatar={{
            alt: 'Avatar',
            avatar: 'https://picsum.photos/seed/1701322447715/300/300',
          }}
          email="email@email.com"
          name="Amy Dutton"
        />
      </div>
    </div>
  )
}

export default InviteGroup
