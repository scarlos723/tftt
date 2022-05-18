import React from 'react'
import { Container, Menu, Nav } from './styles'
import logo from '@/logos/logoTFTT.svg'
export default function Navbar () {
  return (
    <Container>
      <Nav>
        <div>
          <img src={logo} alt=" logo" />
        </div>

        <Menu>
          <li>ABOUT TFtT</li>
          <li>E-commerce</li>
          <li>Producers</li>
          <li>News</li>
          <li>events</li>
          <li>FILMCOIN</li>
        </Menu>

        <h4>
          join our
          Whitelist
        </h4>

      </Nav>
    </Container>
  )
}
