import React from 'react'
import { Container, GrimeHome, Nav, Menu, MenuIcon, RightBox } from './styles'
import { Link } from 'react-router-dom'

import LogoTFTT from '@/logos/logoTFTT'
import { useScrollToSection } from '@/hooks/useScrollToSection'


function GorillasNavbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const scrollToSection = useScrollToSection()

  return (
    <Container>
      <Nav>
        <Link to='/'>
          <LogoTFTT />
        </Link>
        <GrimeHome to="/first-collection/thegeneral">
          GRIME GORILLA$
        </GrimeHome>
        <Menu isOpen={isOpen}>
          <GrimeHome to="/first-collection/thegeneral">
            GRIME GORILLA$
          </GrimeHome>
          <li onClick={() => scrollToSection('about')}>
            About
          </li>
          <li onClick={() => scrollToSection('utility')}>
            Utility
          </li>
          <li>
            <Link to='/register' style={{ fontFamily: 'cooper hewitt' }}>
              Register
            </Link>
          </li>
          <li>
            <Link to='/'>
              <LogoTFTT />
            </Link>
          </li>
        </Menu>
        <RightBox>
          <div className='cursor-pointer'>
            <MenuIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </RightBox>
      </Nav>
    </Container >
  )
}

export default GorillasNavbar