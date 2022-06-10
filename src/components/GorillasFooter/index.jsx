import React from 'react'
import LogoTFTT from '@/logos/logoTFTT'
import { Footer, GrimeHome, PageLink, Row } from './styles'

function GorillasFooter() {
  return (
    <Footer>
      <Row>
        <GrimeHome to="/">
          GRIME GORILLA$
        </GrimeHome>
        <ul>
          <li><PageLink to='/'>
            The General
          </PageLink></li>
          <li><PageLink to='/'>
            Green$
          </PageLink></li>
          <li><PageLink to='/'>
            DJ Grill$
          </PageLink></li>
          <li><PageLink to='/'>
            Mc Dollar$
          </PageLink></li>
          <li><PageLink to='/'>
            Hitman$
          </PageLink></li>
        </ul>
      </Row>
      <Row>
        <p>DarkHorse Film Studios All Rights Reserved.</p>
        <LogoTFTT />
      </Row>
    </Footer>
  )
}

export default GorillasFooter