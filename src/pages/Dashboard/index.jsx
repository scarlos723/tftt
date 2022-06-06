import React from 'react'
import { Background, Container, FormSesion, InputContaier, Table } from './styles'
import useLogin from '@/hooks/useLogin'

export default function Dashboard () {
  const [isLoged, loading, dataUsers, sendCredentials] = useLogin()
  // eslint-disable-next-line no-unused-vars

  // eslint-disable-next-line no-unused-vars

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

  const TableOfUsers = (props) => {
    console.log('los datos son ', props.data)
    return (
      <div>
        {
          loading
            ? <h3>loading</h3>
            : <Table>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
              {props.data.users.map(user => {
                return (
                  <tr>
                    <td>{user.email}</td>
                    <td>{user.firstname}</td>
                    <td>{user.wallet}</td>
                  </tr>
                )
              })}
            </Table>
        }
      </div>

    )
  }

  return (
    <Background>
      <Container>
        {
          !isLoged
            ? <LoginForm />
            : <TableOfUsers data={dataUsers} />
        }

      </Container>
    </Background>
  )
}
