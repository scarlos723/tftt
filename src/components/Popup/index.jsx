import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Image, Section, Text } from './styles'
import gorilla from '../../assets/images/popup/gorilla.png'
export default function Popup (props) {
  const navigate = useNavigate()
  return (
    <Container>
      <Section>
        <div onClick={() => props.setShowPopup(false)} className='close-btn' />
        <Image>
          <img src={gorilla} alt="" />
        </Image>
        <Text>
          <h2>Join our whitelist</h2>
          <h3>Firsts Nft drop <span>coming soon!</span></h3>
        </Text>
        <button onClick={() => navigate('/register')} className='custom-btn'>Register</button>
      </Section>

    </Container>
  )
}
