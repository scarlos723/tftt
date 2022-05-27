import React from 'react'
import { Contain, Container, ImgTFTT } from './styles'
import logo from '@/logos/logoTFTT.svg'
import imgTftt from '@/images/footer/TFTT.png'
import imgFade from '@/images/footer/FADE.png'
export default function Footer () {
  return (
    <Container>
      <Contain>
        <ImgTFTT>
          <img className='tftt-img' src={imgTftt} alt=" tftt logo" />
          <img className='fade-img' src={imgFade} alt="fade image" />
        </ImgTFTT>

        <h1 className='style-border'>
          COMING <br /> SOON
        </h1>
        <div>
          <p> DarkHorse Film Studios All Rights Reserved.</p>
          <img src={logo} alt="" />
        </div>
      </Contain>
    </Container>
  )
}
