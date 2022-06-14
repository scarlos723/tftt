import React from 'react'
import LogoTFTT from '@/logos/logoTFTT'
import { Footer, GrimeHome, PageLink, Row } from './styles'

function GorillasFooter() {
  return (
    <Footer>
      <Row>
        <GrimeHome to="/first-collection/thegeneral">
          GRIME GORILLA$
        </GrimeHome>
        <ul>
          <li><PageLink to='/first-collection/thegeneral'>
            The General
          </PageLink></li>
          <li><PageLink to='/first-collection/green'>
            Green$
          </PageLink></li>
          <li><PageLink to='/first-collection/djgrill'>
            DJ Grill$
          </PageLink></li>
          <li><PageLink to='/first-collection/mcdollar'>
            Mc Dollar$
          </PageLink></li>
          <li><PageLink to='/first-collection/hitman'>
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