import { Link } from 'react-router-dom'

// Styles
import { Container, Menu, Nav, RightBox } from './styles'

// Images and Icons
import logo from '@/logos/logoTFTT.svg'
import menuIcon from '@/icons/navbar/menuIconMb.svg'

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
        <RightBox>
          <img src={menuIcon} alt="" />
          <h4>
          join our
          Whitelist
          </h4>
        </RightBox>

      </Nav>
    </Container>
  )
}
