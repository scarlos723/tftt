import React from 'react'
import { Container, Section, Text } from './styles'

export default function Popup (props) {
  return (
    <Container>
      <Section>
        <div onClick={() => props.setShowPopup(false)} className='close-btn' />
        <Text>
          <h2>Join our whitelist</h2>
          <h3><span>Firsts Nft drop coming soon!</span></h3>
        </Text>
        <button className='custom-btn'>Register</button>
      </Section>

    </Container>
  )
}
