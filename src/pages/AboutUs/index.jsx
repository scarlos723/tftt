import React, { useEffect } from 'react'
import { Background, ImgContainer } from './styles'
import Seo from '../../components/Seo'
import imgSinger from '@/images/aboutus/singer.png'
export default function AboutUs () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Seo title='About Us' />
      <ImgContainer>
        <img src={imgSinger} alt="" />
      </ImgContainer>
      <Background />
    </>
  )
}
