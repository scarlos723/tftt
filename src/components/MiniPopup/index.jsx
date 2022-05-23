import React from 'react'
import { Container } from './styles'

export default function MiniPopup () {
  return (
    <Container>
      <section>
        <h3>join our whitelist <span>today</span></h3>
        <button className='custom-btn'>
          register
        </button>
      </section>
    </Container>
  )
}
