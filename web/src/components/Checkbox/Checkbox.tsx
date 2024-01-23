import { CheckboxField, Label } from '@redwoodjs/forms'

const Checkbox = ({ name, label, defaultChecked = false }) => {
  return (
    <div className="field">
      <CheckboxField name={name} defaultChecked={defaultChecked} />
      <Label name={name}>{label}</Label>
    </div>
  )
}

export default Checkbox
