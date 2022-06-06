import React from 'react'
import axios from 'axios'

export default function login () {
  const API_BASE_URL = import.meta.env.VITE_REGISTER_API

  const [loading, setLoading] = React.useState(false)
  const [isLoged, setIsLoged] = React.useState(false)
  const [dataUsers, setDataUsers] = React.useState({})

  const loginApi = axios.create({
    baseURL: API_BASE_URL,
    timeout: 3000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }

  })

  async function sendCredentials (credentials) {
    const token = localStorage.getItem('tokenTFTT')

    if (token) {
      console.log('token in storage')
      setIsLoged(true)
      getUsers(token)
    } else {
      console.log('token dont exist in storage')
      setLoading(true)
      try {
        const response = await loginApi.post('/login', {
          email: credentials.user,
          password: credentials.password
        })
        if (response) {
          setLoading(false)
          console.log('esta es la respuesta', response)
          localStorage.setItem('tokenTFTT', response.data.token)
          setIsLoged(true)
          getUsers(response.data.token)
        }
      } catch (error) {
        console.log('ocurrio un error', error)
        setLoading(false)
      }
    }
  }

  async function getUsers (token) {
    const getInfoApi = axios.create({
      baseURL: API_BASE_URL,
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    setLoading(true)
    try {
      const response = await getInfoApi.get('/infouser?page=1&limit=0')
      if (response) {
        setLoading(false)
        console.log('response in get users', response)
        setDataUsers(response.data)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return [isLoged, loading, dataUsers, sendCredentials]
}
