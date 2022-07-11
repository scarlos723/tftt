import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from './styles'

export default function MiniPopup () {
  const navigate = useNavigate()
  return (
    <Container>
      <section>
        <h3>Be one of the first to own a</h3>
        <div>
          <h3>From our</h3>
          <h2><span>EXCLUSIVE</span>NFT COLLECTION</h2>
          <button onClick={() => navigate('/register')} className='custom-btn'>
            Register
          </button>
        </div>

      </section>
    </Container>
  )
}
