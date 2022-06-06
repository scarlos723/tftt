import React from 'react'
import { Background, ButtobExportContainer, Container, FormSesion, InputContaier, Table, TableContainer } from './styles'
import useLogin from '@/hooks/useLogin'
import { useEffect } from 'react/cjs/react.production.min'
import { CSVLink } from 'react-csv'

// "_id": "628ffb02c41e00da2d585159",
//             "email": "test@test.co",
//             "firstname": "test",
//             "lastname": "test",
//             "wallet": "0xasd",
//             "created_at": "Thu May 26 2022 22:09:24 GMT+0000 (Coordinated Universal Time)",
//             "updated_at": "Thu May 26 2022 22:09:24 GMT+0000 (Coordinated Universal Time)",

const HEADERS_DOC = [
  { label: 'DB_ID', key: '_id' },
  { label: 'Email', key: 'email' },
  { label: 'First Name', key: 'firstname' },
  { label: 'Last Name', key: 'lastname' },
  { label: 'Wallet', key: 'wallet' },
  { label: 'Created at', key: 'created_at' },
  { label: 'Updated at', key: 'updated_at' }

]

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
    const [csvReport, setCsvReport] = React.useState(null)
    useEffect(() => {
      console.log('los datos son ', props.data)
      setCsvReport(
        {
          data: props.data.users,
          headers: HEADERS_DOC,
          filename: 'TFTT_users_eport.csv'
        }
      )
    }, [props.data])
    return (
      <TableContainer>
        <h3 style={loading ? { display: 'block' } : { display: 'none' }} >Loading</h3>
        <div style={!loading ? { display: 'block' } : { display: 'none' }}>

          {
            csvReport &&
            <ButtobExportContainer >
              <CSVLink {...csvReport}>Export to CSV</CSVLink>
            </ButtobExportContainer>
          }

          <Table>
            <tr>
              <th>Email</th>
              <th>First Name</th>
              <th>Wallet</th>
            </tr>
            {

              props.data.users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.email}</td>
                    <td>{user.firstname}</td>
                    <td>{user.wallet}</td>
                  </tr>
                )
              })

            }
          </Table>
        </div>
      </TableContainer>

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
