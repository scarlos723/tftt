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
          <h3>
          Be one of the first to own a
          </h3>
          <div>
            <h3>FROM OUR</h3>
            <h2><span>Exclusive</span> nft collection</h2>
            <button onClick={() => navigate('/register')} className='custom-btn'>Register</button>
          </div>

        </Text>

      </Section>

    </Container>
  )
}
