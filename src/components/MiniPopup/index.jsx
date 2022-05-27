import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from './styles'
import gorilla from '../../assets/images/popup/gorilla.png'
export default function MiniPopup () {
  const navigate = useNavigate()
  return (
    <Container>
      <section>
        <img className='gorilla-img' src={gorilla} alt="" />
        <h3>join our whitelist <span>today</span></h3>
        <button onClick={() => navigate('/register')} className='custom-btn'>
          register
        </button>
      </section>
    </Container>
  )
}
