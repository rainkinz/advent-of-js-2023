import { EmailField, Form, Label, TextField, useForm } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import ListInvitesCell from 'src/components/ListInvitesCell'

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
      toast.error(error.message)
      console.error(error)
    },
    onCompleted: () => {
      toast.success('Invite was sent')
      formMethods.reset()
    },
  })

  const handleSubmit = (data) => {
    createInvite({
      variables: {
        eventId: eventId,
        ...data,
      },
    })
  }

  return (
    <div>
      <div className="label ml-5 text-black dark:text-white">
        Invite a friend or family member
      </div>
      <Form onSubmit={handleSubmit} formMethods={formMethods}>
        <fieldset disabled={loading}>
          <div className="mb-10 ml-5 flex items-center gap-5 bg-spanishGreen p-4 dark:bg-blackPearl">
            <div className="field mb-0 flex-1">
              <Label name="name">Name</Label>
              <TextField name="name" className="input" placeholder="" />
            </div>
            <div className="field mb-0 flex-1">
              <Label name="email">Email</Label>
              <EmailField name="email" className="input" placeholder="" />
            </div>
            <RoundButton status="warning" type="submit" />
          </div>
        </fieldset>
      </Form>

      <ListInvitesCell eventId={eventId} />
    </div>
  )
}

export default InviteGroup
