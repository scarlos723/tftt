import { FormInput, Label, ErrorMessage } from './styles'
import { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
  const {
    label,
    type,
    name,
    value,
    placeholder,
    onChange,
    onBlur,
    error='',
    required=false,
  } = props

  return (
    <div>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <FormInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        placeholder={placeholder}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  )
})

export default Input
