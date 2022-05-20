import React from 'react'
import { Background, ImgContainer } from './styles'
import imgSinger from '@/images/aboutus/singer.png'
export default function AboutUs () {
  return (
    <>
      <ImgContainer>
        <img src={imgSinger} alt="" />
      </ImgContainer>
      <Background />
    </>
  )
}
