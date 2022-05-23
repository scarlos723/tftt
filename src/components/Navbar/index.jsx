import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import { Container, Menu, MenuIcon, Nav, RightBox } from './styles'

// Images and Icons
import logo from '@/logos/logoTFTT.svg'
import textLogo from '@/logos/textLogo.svg'
export default function Navbar () {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Container>
      <Nav>
        <Link to='/'>
          <img className='img-logo' src={logo} alt=" logo" />
        </Link>
        <Menu isOpen={isOpen}>
          <li className='li-logo'>
            <Link to='/'>
              <img className='img-logo' src={textLogo} alt=" logo" />
            </Link>
          </li>
          <li>
            <Link to='/aboutus'>
            ABOUT TFT<span>T</span>
            </Link>
          </li>
          <li>
            <Link to='/marketplace'>
            E-commerce
            </Link>
          </li>
          <li>
            <Link to='/producer'>
            Producers
            </Link>
          </li>
          <li>
            <Link to='/news'>
            News
            </Link>
          </li>
          <li>
            <Link to='/events'>
            events
            </Link>
          </li>
          <li>
            <Link to='/filmcoin'>
            FILMCOIN
            </Link>
          </li>
          <li className='join-text'>
            <Link to="/">
              join our
              Whitelist
            </Link>
          </li>
        </Menu>
        <RightBox>
          <MenuIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/>
          <h4>
          join our
          Whitelist
          </h4>
        </RightBox>

      </Nav>
    </Container>
  )
}
