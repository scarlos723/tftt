import React from 'react'
import { Background, Container, FormSesion, InputContaier } from './styles'
import useLogin from '@/hooks/useLogin'

export default function Dashboard () {
  const [isLoged, setIsLoged] = React.useState(false)
  const [loading, dataUsers, sendCredentials] = useLogin()
  // eslint-disable-next-line no-unused-vars

  // eslint-disable-next-line no-unused-vars

  const InfoContainer = () => {
    return (
      <h1>
        Aqui va la info
      </h1>
    )
  }

  const LoginForm = () => {
    const [dataInputs, setDataInputs] = React.useState({
      user: '',
      password: ''
    })
    function handlerChange (e) {
      console.log('los valores son ', [e.target.name, e.target.value])
      setDataInputs({
        ...dataInputs,
        [e.target.name]: e.target.value
      })
    }
    function handlerLogin (e) {
      e.preventDefault()
      console.log('Login')
      setIsLoged(true)
      sendCredentials(dataInputs)
    }

    return (
      <div>
        <h1>Use your credentials to access</h1>
        <FormSesion onChange={handlerChange}>
          <InputContaier>
            <label htmlFor='input-user'>User: </label>
            <input
              id='input-user'
              type='text'
              name='user'
              autoComplete='off'
              value={dataInputs.user}
            />
          </InputContaier>
          <InputContaier>
            <label htmlFor='input-password'>Password: </label>
            <input
              type='password'
              name='password'
              required
              autoComplete='off'
              value={dataInputs.password}
            />
          </InputContaier>
          <button id='input-password' className='custom-btn' onClick={(e) => handlerLogin(e)}>Login</button>
        </FormSesion>
      </div>
    )
  }
  return (
    <Background>
      <Container>
        {
          isLoged
            ? <InfoContainer />
            : <LoginForm />
        }
        {
          loading
            ? <h3>loading</h3>
            : <h3>{`esta es la data:${dataUsers.users}`}</h3>
        }
      </Container>
    </Background>
  )
}
