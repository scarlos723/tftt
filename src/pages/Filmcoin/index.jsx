import React, { useEffect } from 'react'
import BannerFilmcoin from '../../components/BannerFilmcoin'
import Participate from '../../components/Participate'
import WeAre from '../../components/WeAre'

export default function Filmcoin () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <BannerFilmcoin />
      <WeAre />
      <Participate />
    </div>
  )
}
