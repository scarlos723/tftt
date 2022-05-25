import React, { useEffect } from 'react'
import BannerFilmcoin from '../../components/BannerFilmcoin'
import Participate from '../../components/Participate'
import Seo from '../../components/Seo'
import WeAre from '../../components/WeAre'

export default function Filmcoin () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Seo
        title='FILMCOIN'
        description='The FilmCoin Utility Token will be created on the 28th February 2022 using the ERC-20 standard and deployed to the Ethereum blockchain acting as a native currency for the Darkhorse Film Studios decentralized application program (DAPP)'
      />
      <BannerFilmcoin />
      <WeAre />
      <Participate />
    </div>
  )
}
