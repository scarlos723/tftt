import React, { useEffect } from 'react'
import { BackgroundEvents, ImgContEvensts } from './styles'
import singer from '@/images/events/singer.png'

export default function Events () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <ImgContEvensts>
        <img src={singer} alt="" />
      </ImgContEvensts>
      <BackgroundEvents />
    </>
  )
}
