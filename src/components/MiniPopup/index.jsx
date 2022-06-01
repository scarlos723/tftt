import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from './styles'
import gorilla from '../../assets/images/minipopup/gorilla.png'
import gorillasGroup from '../../assets/images/minipopup/gorillasGroup.png'
export default function MiniPopup () {
  const navigate = useNavigate()
  return (
    <Container>
      <section>
        <img className='gorilla-img' src={gorilla} alt="" />
        <img className='gorilla-group' src={gorillasGroup} alt="" />
        <h3>join our <br /> whitelist <span>today</span></h3>
        <button onClick={() => navigate('/register')} className='custom-btn'>
          register
        </button>
      </section>
    </Container>
  )
}
