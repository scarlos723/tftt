import React from 'react'
import {
  // Article,
  CardsContainer,
  Container,
  // RowButton,
  Section,
  TextBox,
  Title
} from './styles'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logos/logoTFTT.svg'

export default function TopDrops () {
  const navigate = useNavigate()
  return (
    <Container>
      <Title>
        <div className='text'><img src={logo} alt="" /> <h3>MARKETPLACE</h3></div>
        <h1 className='style-border'>COMING SOON</h1>
      </Title>
      <Section>
        <CardsContainer>
          <article />
          <article />
          <article />
        </CardsContainer>
      </Section>
      <TextBox>
        <h3><span>Don’t miss any detail!</span></h3>
        <p>Register now on our whitelist and stay tuned for
          the launch of our first <span>NFT</span> collection</p>
        <button
          onClick={() => navigate('/register')}
          className='custom-btn'> Register now
        </button>
      </TextBox>
    </Container>
  )
}
