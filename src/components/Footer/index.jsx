import React from 'react'
import { Contain, Container } from './styles'
import logo from '@/logos/logoTFTT.svg'
export default function Footer () {
  return (
    <Container>
      <Contain>
        <h1>
          COMING <br /> SOON
        </h1>
        <div>
          <p> DarkHorse Film Studio All Rights Reserved.</p>
          <img src={logo} alt="" />
        </div>
      </Contain>

    </Container>
  )
}
