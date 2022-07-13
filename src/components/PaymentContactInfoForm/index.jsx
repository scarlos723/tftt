
import { useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  Button,
  Container,
  Error,
  Form,
  Input,
  Label,
  Section,
  Title
} from './styles'

import { sendContactInfo } from '@/services/Api'
import paymentContactInfoFormSchema from './schema'

function PaymentContactInfoForm () {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'all',
    resolver: yupResolver(paymentContactInfoFormSchema)
  })

  const onSubmitHandler = async (data) => {
    try {
      const response = await sendContactInfo(data)

      if (response.msg === 'ok') {
        navigate(`/payment2/?token=${response.token}`)
      }
    } catch (error) {
      navigate('/error-payment')
      console.log(error)
    }
  }

  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
            <Title>Confirm your information</Title>
            <div>
              <Label htmlFor='email' required>Contact Mail</Label>
              <Input
                type='email'
                placeholder='Enter email address'
                {...register('email')}
              />
              {errors.email && <Error>{errors.email.message}</Error>}
            </div>

            <div>
              <Label htmlFor='name' required>Name</Label>
              <Input
                type='text'
                placeholder='Enter name'
                {...register('name')}
              />
              {errors.name && <Error>{errors.name.message}</Error>}
            </div>

            <div>
              <Label htmlFor='lastname' required>Last Name</Label>
              <Input
                type='text'
                {...register('lastname')}
              />
              {errors.lastname && <Error>{errors.lastname.message}</Error>}
            </div>

            <div>
              <Label htmlFor='wallet'>Wallet Address</Label>
              <Input
                type='text'
                placeholder='Enter wallet address'
                {...register('wallet')}
              />
            </div>

            <div>
              <Label htmlFor='phone'>Phone Number</Label>
              <Input
                type='tel'
                {...register('phone')}
              />
              {errors.phone && <Error>{errors.phone.message}</Error>}
            </div>
            <Input
              hidden
              type='hidden'
              {...register('refCode')}
              value='null'
            />
            <div>
              <Button type='submit'>
                Continue to payment
              </Button>
              <Button
                variant='secondary'
                onClick={() => navigate('/')}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Container>
      </Section>
    </>
  )
}

export default PaymentContactInfoForm
