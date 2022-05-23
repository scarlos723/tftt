import React from 'react'
import { Container, ImgContainer, Textbox } from './styled'
import girl from '@/images/filmcoin/glassGirl.png'
import coin from '@/images/filmcoin/filmcoin.gif'
export default function WeAre () {
  return (
    <Container>
      <Textbox>
        <h3>we are not just another token</h3>
        <h3><span>We are disrupting the traditional markets of film & television</span></h3>
        <p>If you ever thought taking part in a Blockbuster film was out of your
        reach, well now you’re in luck as The FILM<span style={{ color: '#12D466' }}>COIN</span> Utility
        Token will offer its holders access to participate in Film.
        We are potentially creating life changing opportunities for our
        token holders.</p>
        <button className='custom-btn'>Learn More</button>
      </Textbox>
      <ImgContainer>
        <img src={girl} alt="glass girl image" />
        <img className='gif' src={coin} alt="" />
      </ImgContainer>
    </Container>
  )
}
