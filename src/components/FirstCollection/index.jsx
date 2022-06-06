import React from 'react'
import { Box, Container, Grid, Section } from './styles'
// import shareIcon from '@/icons/shareIcon.svg'

import gorilla1 from '@/images/marketplace/gorilla1.png'
import gorilla2 from '@/images/marketplace/gorilla2.png'
import gorilla3 from '@/images/marketplace/gorilla3.png'
import gorilla4 from '@/images/marketplace/gorilla4.png'
import gorilla5 from '@/images/marketplace/gorilla5.png'

export default function FirstCollection () {
  return (
    <Container>
      <h3>First Collection</h3>
      <Section>
        <Box>
          <Grid>
            <article className='hidden-mb'>
              <h3>Earth gorilla$</h3>
              <img src={gorilla2} alt="" />
            </article>
            <article>
              <h3>Water gorilla$</h3>
              <img src={gorilla1} alt="" />
            </article>
            <article>
              <h3>The general</h3>
              <img src={gorilla3} alt="" />
            </article>
            <article >
              <h3>Air gorilla$</h3>
              <img src={gorilla5} alt="" />
            </article>
            <article className='hidden-mb'>
              <h3>Fire gorilla$</h3>
              <img src={gorilla4} alt="" />
            </article>
          </Grid>
          <div className='comming'>
            <h2 className='style-border-white'>Welcome</h2>
          </div>
        </Box>
        <h3>WELCOME TO THE GRIME GORILLA$ NFT COLLECTION</h3>
      </Section>

    </Container>
  )
}
