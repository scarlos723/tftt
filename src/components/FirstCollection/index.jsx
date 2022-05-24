import React from 'react'
import { Article, Container, Section, TextBox } from './styles'
import shareIcon from '../../assets/icons/shareIcon.svg'
import { useNavigate } from 'react-router-dom'
export default function FirstCollection () {
  const navigate = useNavigate()
  return (
    <Container>
      <h3>FirstCollection</h3>
      <Section>
        <Article>
          <h2 className='style-border-white'>Coming Soon</h2>
        </Article>
        <h3>GRIME GORILLA$</h3>
        <div className='share-icon'> <img src={shareIcon} alt="" /> </div>
      </Section>
      <TextBox>
        <h3><span>Don’t miss any detail!</span></h3>
        <p>Register now in our whitelist and stay tuned for
          the launch of our first <span>NFT</span> collection</p>

        <button
          onClick={() => navigate('/register')}
          className='custom-btn'> Register now</button>
      </TextBox>
    </Container>
  )
}
