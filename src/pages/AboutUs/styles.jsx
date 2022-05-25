import styled from 'styled-components'
import bgImg from '@/images/aboutus/largeBg.png'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const Background = styled.div`
  position: absolute;
  background: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: -180px;
  background-position-y: top;
  width: 100%;
  height: 100vh;
  top: 0;
  ${ResponsiveTo('md')}{
    background-position-x: center;
    
    height: 100vh;
  }
  ${ResponsiveTo('lg')}{
    background-position-y: center;
  }
  ${ResponsiveTo('xl')}{
    height: 1029.61px;
  } 
`
export const ImgContainer = styled.div`
  display: grid;
  place-content: center;
  margin: 0 auto;
  padding-top: 100px;
  margin-bottom: -160px;
  position: relative;
  z-index: -1;
  img{
    width: 100%;
    height: 100%;
    
    left: 0px;
  }
  ${ResponsiveTo('md')}{
    padding-top: 200px;
    img{
      width: 353px;
      height: 511px;
    }
  }
  ${ResponsiveTo('lg')}{
    padding-top: 100px;
    img{
      width: 453px;
      height: 611px;
    }
  }
  ${ResponsiveTo('xl')}{
    margin-bottom: -250px;
  }
`
