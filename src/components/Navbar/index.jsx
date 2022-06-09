import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import { Container, Menu, MenuIcon, Nav, RightBox } from './styles'

// Images and Icons
import textLogo from '@/logos/textLogo.svg'
import LogoTFTT from '@/logos/logoTFTT'
import { useLocationVariant } from '@/hooks/useLocationVariant'
import { colorVariants } from '@/utils/colorVariants'

export default function Navbar(props) {
  const [isOpen, setIsOpen] = React.useState(false)
  const locationVariant = useLocationVariant();

  return (
    <Container gradient={props.gradient}>
      <Nav>
        <Link to='/'>
          <LogoTFTT variant={locationVariant} />
        </Link>
        <Menu isOpen={isOpen}>
          <li>
            <Link to='/'>
              <LogoTFTT variant={locationVariant} />
            </Link>
          </li>
          <li>
            <Link to='/aboutus'>
              ABOUT TFT<span style={{ color: locationVariant === colorVariants.secondary && '#0E8C0D' }}>T</span>
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
          <li className='join-text cursor-pointer'>
            <Link to="/register">
              join our
              Whitelist
            </Link>
          </li>
        </Menu>
        <RightBox>
          <div className='cursor-pointer'>
            <MenuIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
          <Link to='/register'>
            <h4 className='cursor-pointer'>
              join our
              Whitelist
            </h4>
          </Link>

        </RightBox>

      </Nav>
    </Container>
  )
}
