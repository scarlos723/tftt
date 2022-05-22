import styled from 'styled-components'
import bgImg from '@/images/news/largeBg.png'
import { Background, ImgContainer } from '../AboutUs/styles'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const BackgroundNews = styled(Background)`
  background: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  z-index: -2;
  ${ResponsiveTo('md')}{
    background-position-x: left;
  }
  ${ResponsiveTo('lg')}{
    background-position-x: center;
    background-position-y: center;
  }
`
export const ImgContNews = styled(ImgContainer)`
  img{
    width: 162px;
    height: 244px;
  }  
  margin-bottom: -110px;
  z-index: -1;
  ${ResponsiveTo('md')}{
    img{
      width: 306px;
      height: 459px;
    }
  }
  ${ResponsiveTo('xl')}{
    margin-bottom: -200px;
  }
`
