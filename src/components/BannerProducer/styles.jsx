import styled from 'styled-components'
import bgImg from '../../assets/images/producer/bgBanner.png'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const Background = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 4.97%, #000000 83.77%),
          url(${bgImg});
  background-repeat: no-repeat;
  background-size:100% 40%, cover;
  background-position-x: right;
  background-position-y:bottom, top;
  display: grid;
  place-content: center;
  height: 422px;
  h1{
    letter-spacing: 0.01rem;
  }
  ${ResponsiveTo('md')}{
    height: 703px;
    background-position-x: center;
  }
  ${ResponsiveTo('lg')}{
    height: 562.24px;
    background-position-x: right;
  }
  ${ResponsiveTo('xl')}{
    height: 702.8px;
  }
`
