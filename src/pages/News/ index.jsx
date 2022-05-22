import React from 'react'
import { BackgroundNews, ImgContNews } from './styles'
import imgCharacter from '@/images/news/characterNews.png'
export default function News () {
  return (
    <>
      <ImgContNews>
        <img src={imgCharacter} alt="" />
      </ImgContNews>
      <BackgroundNews />
    </>
  )
}
