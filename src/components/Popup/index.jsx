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
            <i>Be one of the first to own a</i>
          </h3>
          <div>
            <h3><i>FROM OUR<span className='style-border-white-transparent'>Exclusive</span> nft collection</i></h3>
            <button onClick={() => navigate('/register')} className='custom-btn'>Register</button>
          </div>

        </Text>

      </Section>

    </Container>
  )
}
