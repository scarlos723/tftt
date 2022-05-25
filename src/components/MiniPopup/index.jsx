import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from './styles'

export default function MiniPopup () {
  const navigate = useNavigate()
  return (
    <Container>
      <section>
        <h3>join our whitelist <span>today</span></h3>
        <button onClick={() => navigate('/register')} className='custom-btn'>
          register
        </button>
      </section>
    </Container>
  )
}
