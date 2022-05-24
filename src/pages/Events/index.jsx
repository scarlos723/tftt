import React, { useEffect } from 'react'
import { BackgroundEvents, ImgContEvensts } from './styles'
import singer from '@/images/events/singer.png'
import Seo from '../../components/Seo'

export default function Events () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Seo title='Events' />
      <ImgContEvensts>
        <img src={singer} alt="" />
      </ImgContEvensts>
      <BackgroundEvents />
    </>
  )
}
