import React, { useEffect } from 'react'
import { Background, ImgContainer } from './styles'
import imgSinger from '@/images/aboutus/singer.png'
export default function AboutUs () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <ImgContainer>
        <img src={imgSinger} alt="" />
      </ImgContainer>
      <Background />
    </>
  )
}
