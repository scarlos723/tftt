import styled from 'styled-components'
import { Background, ImgContainer } from '../AboutUs/styles'
import imgBg from '@/images/events/largeBg.png'
import { ResponsiveTo } from '../../hooks/useResponsive'
export const BackgroundEvents = styled(Background)`
  background: url(${imgBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: top;
  z-index: -2;
`
export const ImgContEvensts = styled(ImgContainer)`
  img{
    width: 204px;
    height: 251px;
  }
  z-index: -1;
  margin-bottom: -110px;
  
  ${ResponsiveTo('md')}{
    img{
      width: 336px;
      height: 413px;
    }
  }
  ${ResponsiveTo('lg')}{
    img{
      width: 502px;
      height: 617px;    
    }
  }
  ${ResponsiveTo('xl')}{
    margin-bottom: -220px;
  }
`
