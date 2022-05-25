import React from 'react'
import { Contain, Container } from './styles'
import logo from '@/logos/logoTFTT.svg'
export default function Footer () {
  return (
    <Container>
      <Contain>
        <h1 className='style-border'>
          COMING <br /> SOON
        </h1>
        <div>
          <p> DarkHorse Film Studios All Rights Reserved.</p>
          <img src={logo} alt="" />
        </div>
      </Contain>
    </Container>
  )
}
