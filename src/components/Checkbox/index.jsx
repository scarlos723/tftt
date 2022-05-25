import { FormCheckbox, Label, ErrorMessage, TextContainer } from './styles'
import { forwardRef } from 'react'

const Checkbox = forwardRef((props, ref) => {
  const {
    label,
    name,
    value,
    onChange,
    onBlur,
    error = ''
  } = props

  return (
    <>
      <Label>
        {label}
        <FormCheckbox
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
        />
        <TextContainer />
      </Label>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  )
})

export default Checkbox
