import React from 'react'
import { BackgroundEvents, ImgContEvensts } from './styles'
import singer from '@/images/events/singer.png'

export default function Events () {
  return (
    <>
      <ImgContEvensts>
        <img src={singer} alt="" />
      </ImgContEvensts>
      <BackgroundEvents />
    </>
  )
}
