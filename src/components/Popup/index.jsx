import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Section, Text } from './styles'

export default function Popup (props) {
  const navigate = useNavigate()
  return (
    <Container>
      <Section>
        <div onClick={() => props.setShowPopup(false)} className='close-btn' />
        <Text>
          <h2>Join our whitelist</h2>
          <h3><span>Firsts Nft drop coming soon!</span></h3>
        </Text>
        <button onClick={() => navigate('/register')} className='custom-btn'>Register</button>
      </Section>

    </Container>
  )
}
