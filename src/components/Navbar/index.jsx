import React from 'react'
import { Container, Menu, Nav } from './styles'
import logo from '@/logos/logoTFTT.svg'
import { Link } from 'react-router-dom'
export default function Navbar () {
  return (
    <Container>
      <Nav>
        <Link to='/'>
          <img src={logo} alt=" logo" />
        </Link>

        <Menu>
          <li>
            <Link to='/'>
            ABOUT TFtT
            </Link>
          </li>
          <li>
            <Link to='/'>
            E-commerce
            </Link>
          </li>
          <li>
            <Link to='/'>
            Producers
            </Link>
          </li>
          <li>
            <Link to='/'>
            News
            </Link>
          </li>
          <li>
            <Link to='/'>
            events
            </Link>
          </li>
          <li>
            <Link to='/'>
            FILMCOIN
            </Link>
          </li>
        </Menu>

        <h4>
          join our
          Whitelist
        </h4>

      </Nav>
    </Container>
  )
}
