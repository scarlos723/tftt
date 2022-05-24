import React, { useEffect } from 'react'
import { BackgroundNews, ImgContNews } from './styles'
import imgCharacter from '@/images/news/characterNews.png'
import Seo from '../../components/Seo'
export default function News () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Seo title='News' />
      <ImgContNews>
        <img src={imgCharacter} alt="" />
      </ImgContNews>
      <BackgroundNews />
    </>
  )
}
