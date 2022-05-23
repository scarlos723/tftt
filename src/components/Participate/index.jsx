import React from 'react'
import { Box, Container } from './styles'
import whitepaper from '@/icons/filmcoin/whitepaper.svg'
import litepaper from '@/icons/filmcoin/litepaper.svg'
export default function Participate () {
  return (
    <Container>
      <Box>
        <h2>participate in film<span style={{ color: '#12D466' }}>coin</span></h2>
        <h3><span>The Motion Picture Digital Currency Of Choice</span></h3>
        <div className='icons-container'>
          <article>
            <img src={whitepaper} alt="" />
            <h3>WhitePaper</h3>
          </article>
          <article>
            <img src={litepaper} alt="" />
            <h3>LitePaper</h3>
          </article>
        </div>
      </Box>
    </Container>
  )
}
