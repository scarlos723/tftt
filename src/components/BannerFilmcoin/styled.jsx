import styled from 'styled-components'
import bgImg from '../../assets/images/filmcoin/bgBanner.png'
import { ResponsiveTo } from '../../hooks/useResponsive'
export const Background = styled.div`
  
  height: 413px;
  background: linear-gradient(180deg, 
                  rgba(217, 217, 217, 0) 34.46%,
                #000000 100%), 
              url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: top, center;
  display: grid;
  ${ResponsiveTo('md')}{
    height: 566px;
  }
  ${ResponsiveTo('lg')}{
    height: 655px;
  }
  ${ResponsiveTo('xl')}{
    height: 793px;
  } 
`
export const Box = styled.section`
  display: grid;
  place-content: center;
  place-items: center;
  position: relative;
  top: 40%;
  img{
    width: 235px;
    height: 37px;
  }
  ${ResponsiveTo('md')}{
    top: 10%;
    img{
      width: 328px;
      height: 53px;
    }
  }
  ${ResponsiveTo('lg')}{
    top: 12%;
  }
  ${ResponsiveTo('xl')}{
    
    img{
      width: 415px;
      height: 67px;
    }
  }
`
