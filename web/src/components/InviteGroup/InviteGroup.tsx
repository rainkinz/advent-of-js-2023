import { EmailField, Form, Label, TextField, useForm } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import Card from '../Card/Card'
import RoundButton from '../RoundButton/RoundButton'

const CREATE_INVITE_MUTATION = gql`
  mutation createInviteMutation(
    $eventId: String!
    $email: String!
    $name: String!
  ) {
    createInvite(
      input: { eventId: $eventId, status: INVITED, email: $email, name: $name }
    ) {
      id
    }
  }
`

const InviteGroup = ({ eventId }) => {
  const formMethods = useForm()

  const [createInvite, { loading }] = useMutation(CREATE_INVITE_MUTATION, {
    onError: (error) => {
      console.log(error)
      toast.error(error.message)
    },
    onCompleted: () => {
      toast.success('Invite was sent')
      formMethods.reset()
      // navigate(routes.eventInvites())
    },
  })

  const handleSubmit = (data) => {
    console.log(data)
    createInvite({
      variables: {
        eventId: eventId,
        ...data,
      },
    })
  }

  return (
    <div>
      <div className="label ml-5">Invite a friend or family member</div>
      <div className="mb-10 ml-5 flex items-center gap-5 bg-spanishGreen p-4">
        <Form onSubmit={handleSubmit} formMethods={formMethods}>
          <fieldset disabled={loading}>
            <div className="field flex-1">
              <Label name="name">Name</Label>
              <TextField name="name" className="input" placeholder="" />
            </div>
            <div className="field flex-1">
              <Label name="email">Email</Label>
              <EmailField name="email" className="input" placeholder="" />
            </div>
            <RoundButton status="warning" type="submit" />
          </fieldset>
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
