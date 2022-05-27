import Input from '@/components/Input'
import { useForm } from 'react-hook-form'
import { Button, CheckboxContainer, Container, Form, TermsLink } from './styles'
import { yupResolver } from '@hookform/resolvers/yup'
import registerSchema from './schema'
import Checkbox from '@/components/Checkbox'
import removeProperties from '@/utils/removeProperties'
import registerService from '@/services/register'
import { useNavigate } from 'react-router-dom'


function FormRegister() {
  const goTo = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'all',
    resolver: yupResolver(registerSchema)
  })

  const onSubmitHandler = async data => {
    try {
      // Remove unnecessary properties from data
      const user = removeProperties(
        data,
        data.phone ? ['terms'] : ['phone', 'terms']
      )
      await registerService(user)
      goTo('/success')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Form noValidate onSubmit={handleSubmit(onSubmitHandler)}>
        <Input
          type='text'
          label='Name'
          name='firstname'
          placeholder='Enter name'
          required
          error={errors.firstname ? errors.firstname.message : ''}
          onChange={register('firstname').onChange}
          onBlur={register('firstname').onBlur}
          ref={register('firstname').ref}
        />
        <Input
          type='text'
          label='Last Name'
          name='lastname'
          placeholder='Enter last name'
          required
          error={errors.lastname ? errors.lastname.message : ''}
          onChange={register('lastname').onChange}
          onBlur={register('lastname').onBlur}
          ref={register('lastname').ref}
        />
        <Input
          type='email'
          label='E-mail'
          name='email'
          placeholder='Enter email address'
          required
          error={errors.email ? errors.email.message : ''}
          onChange={register('email').onChange}
          onBlur={register('email').onBlur}
          ref={register('email').ref}
        />
        <Input
          type='text'
          label='Wallet Address'
          name='wallet'
          placeholder='Enter wallet address'
          required
          error={errors.wallet ? errors.wallet.message : ''}
          onChange={register('wallet').onChange}
          onBlur={register('wallet').onBlur}
          ref={register('wallet').ref}
        />
        <Input
          type='tel'
          label='Phone Number'
          name='phone'
          error={errors.phone ? errors.phone.message : ''}
          onChange={register('phone').onChange}
          onBlur={register('phone').onBlur}
          ref={register('phone').ref}
        />
        <CheckboxContainer>
          <Checkbox
            label={<>
              I agree to <TermsLink to='/terms'>
                terms and conditions
              </TermsLink>
            </>}
            name='terms'
            error={errors.terms ? errors.terms.message : ''}
            onChange={register('terms').onChange}
            onBlur={register('terms').onBlur}
            ref={register('terms').ref}
          />
        </CheckboxContainer>
        <Button type='submit'>Register</Button>
      </Form>
    </Container>
  )
}

export default FormRegister
