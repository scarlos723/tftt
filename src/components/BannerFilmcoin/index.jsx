import React from 'react'
import { Background, Box } from './styled'
import logo from '@/images/filmcoin/filmcoinLogo.png'
export default function BannerFilmcoin () {
  return (
    <Background>
      <Box>
        <h3><span>Darkhorse INTRODUCES</span></h3>
        <img src={logo} alt="filmcoin logo" />
      </Box>
    </Background>
  )
}
