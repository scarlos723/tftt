import React from 'react'
import { Box, Container, Grid, Section } from './styles'
// import shareIcon from '@/icons/shareIcon.svg'

import gorilla1 from '@/images/marketplace/gorilla1.png'
import gorilla2 from '@/images/marketplace/gorilla2.png'
import gorilla3 from '@/images/marketplace/gorilla3.png'
import gorilla4 from '@/images/marketplace/gorilla4.png'
import gorilla5 from '@/images/marketplace/gorilla5.png'
import { useNavigate } from 'react-router-dom'

export default function FirstCollection () {
  const navigate = useNavigate()
  return (
    <Container>
      <h3>First Collection</h3>
      <Section>
        <Box>
          <Grid>
            <article className='hidden-mb'>
              <img src={gorilla2} alt="" />
            </article>
            <article>

              <img src={gorilla1} alt="" />
            </article>
            <article>

              <img src={gorilla3} alt="" />
            </article>
            <article >

              <img src={gorilla5} alt="" />
            </article>
            <article className='hidden-mb'>
              <img src={gorilla4} alt="" />
            </article>
          </Grid>
          <div className='hover-grid'>
            <article onClick={() => navigate('/first-collection/green')} className='hidden-mb'>
              <h3>Green$</h3>
              <div />
            </article>
            <article onClick={() => navigate('/first-collection/djgrill')}>
              <h3>Dj Grill$</h3>
              <div />
            </article>
            <article onClick={() => navigate('/first-collection')} className='middle'>
              <h3>The general</h3>
              <div />
            </article>
            <article onClick={() => navigate('/first-collection/mcdollar')} >
              <h3>MC Dollar$</h3>
              <div />
            </article>
            <article onClick={() => navigate('/first-collection/hitman')} className='hidden-mb'>
              <h3>Hitman$</h3>
              <div />
            </article>
          </div>
          <div className='comming'>
            <h2 className='style-border-white'>Welcome</h2>
            <h2 className='hover-text style-border' >COMING SOON</h2>
          </div>
        </Box>
        <h3>WELCOME TO THE GRIME GORILLA$ NFT COLLECTION</h3>
      </Section>

    </Container>
  )
}
