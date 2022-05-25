import * as yup from 'yup'

// A valid phone have min 6 digits
const phoneRegExp = /\d{6,}/g

const schema = yup.object().shape({
  email: yup.string()
    .email('Invalid email')
    .required('Required'),
  firstname: yup.string()
    .required('Required'),
  lastname: yup.string()
    .required('Required'),
  wallet: yup.string()
    .required('Required'),
  phone: yup.string()
    .optional()
    .matches(
      phoneRegExp,
      {
        message: 'Invalid phone number',
        excludeEmptyString: true // Empty string is valid
      }
    ),
  terms: yup.bool()
    .test(
      'isTrue',
      'Must accept our terms and conditions',
      (value, context) => value === true
    )
})

export default schema
