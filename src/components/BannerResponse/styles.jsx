import styled from 'styled-components'
import bgBanner from '@/images/success/bgBanner.png'
import { ResponsiveTo } from '../../hooks/useResponsive'
export const Background = styled.div`
  width: 100%;
  height: 319px;
  background-image: url(${bgBanner});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -140px;
  h1{
    font-size: 30px;
    letter-spacing: 0.01rem;
  }
  ${ResponsiveTo('md')} {
    height: 555px;
    margin-bottom: -200px;
    h1{
      font-size: 50px;
    }
  }
  ${ResponsiveTo('xl')} {
    margin-bottom: -140px;
    h1{
      font-size: 65px;
    }
  }
`
