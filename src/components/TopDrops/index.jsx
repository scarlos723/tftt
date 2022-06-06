import React from 'react'
import {
  Article,
  CardsContainer,
  Container,
  // RowButton,
  Section,
  TextBox,
  Title
} from './styles'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logos/logoTFTT.svg'
import picture1 from '@/images/marketplace/picture1.png'
import picture2 from '@/images/marketplace/picture2.png'
import picture3 from '@/images/marketplace/picture3.png'
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
          <Article >
            <img src={picture1} alt="picture singer man" />
            <div className="hover">
              <h3>purchase a <br /> roll in the film</h3>
            </div>
          </Article>
          <Article >
            <img src={picture2} alt="picture singer girls" />
            <div className="hover">
              <h3>
                purchase the opportunity to walk in the red carpet
              </h3>
            </div>
          </Article>
          <Article >
            <img src={picture3} alt="picture man in to scene" />
            <div className="hover">
              <h3>
                purchase the opportunity to meet the cast members
              </h3>
            </div>
          </Article>
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
