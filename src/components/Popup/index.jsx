import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Image, Section, Text } from './styles'
export default function Popup (props) {
  const navigate = useNavigate()
  return (
    <Container>
      <Section>
        <div onClick={() => props.setShowPopup(false)} className='close-btn' />
        <Image />
        <Text>
          <h2>Join our whitelist</h2>
          <h3>TFTT Nft drop <span>coming soon!</span></h3>
        </Text>
        <button onClick={() => navigate('/register')} className='custom-btn'>Register</button>
      </Section>

    </Container>
  )
}
