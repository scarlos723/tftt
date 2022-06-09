import React from 'react'
import { Contain, Container, ImgTFTT } from './styles'
import LogoTFTT from '@/logos/logoTFTT'
import imgTftt from '@/images/footer/TFTT.png'
import imgFade from '@/images/footer/FADE.png'
import { useLocationVariant } from '@/hooks/useLocationVariant'
import { colorVariants } from '@/utils/colorVariants'

export default function Footer () {
  const locationVariant = useLocationVariant();

  return (
    <Container>
      <Contain>
        <ImgTFTT>
          <img className='tftt-img' src={imgTftt} alt=" tftt logo" />
          <img className='fade-img' src={imgFade} alt="fade image" />
        </ImgTFTT>
        <h1 className='style-border' style={{ WebkitTextStrokeColor: locationVariant === colorVariants.secondary && '#0E8C0D' }}>
          COMING SOON
        </h1>
        <div>
          <p> DarkHorse Film Studios All Rights Reserved.</p>
          <LogoTFTT variant={locationVariant} />
        </div>
      </Contain>
    </Container>
  )
}
