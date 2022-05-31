import React from 'react'
import { Box, Container, Grid, Section, TextBox } from './styles'
// import shareIcon from '../../assets/icons/shareIcon.svg'
import { useNavigate } from 'react-router-dom'
import gorilla1 from '../../assets/images/marketplace/gorilla1.png'
import gorilla2 from '../../assets/images/marketplace/gorilla2.png'
import gorilla3 from '../../assets/images/marketplace/gorilla3.png'
import gorilla4 from '../../assets/images/marketplace/gorilla4.png'
import gorilla5 from '../../assets/images/marketplace/gorilla5.png'

export default function FirstCollection () {
  const navigate = useNavigate()
  return (
    <Container>
      <h3>FirstCollection</h3>
      <Section>
        <Box>
          <Grid>
            <article>
              <h3>Water gorilla</h3>
              <img src={gorilla1} alt="" />
            </article>
            <article>
              <h3>Earth gorilla</h3>
              <img src={gorilla2} alt="" />
            </article>
            <article>
              <h3>Ultimate gorilla</h3>
              <img src={gorilla3} alt="" />
            </article>
            <article>
              <h3>Fire gorilla</h3>
              <img src={gorilla4} alt="" />
            </article>
            <article>
              <h3>Air gorilla</h3>
              <img src={gorilla5} alt="" />
            </article>

          </Grid>
          <div className='comming'>
            <h2 className='style-border-white'>Welcome</h2>
          </div>
        </Box>
        <h3>WELCOME TO THE GRIME GORILLA$ NFT COLLECTION</h3>
      </Section>
      <TextBox>
        <h3><span>Don’t miss any detail!</span></h3>
        <p>Register now in our whitelist and stay tuned for
          the launch of our first <span>NFT</span> collection</p>
        <button
          onClick={() => navigate('/register')}
          className='custom-btn'> Register now
        </button>
      </TextBox>
    </Container>
  )
}
