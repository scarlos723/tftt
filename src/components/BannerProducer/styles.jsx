import styled from 'styled-components'
import bgImg from '../../assets/images/producer/bgBanner.png'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const Background = styled.div`
  background: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: right;
  background-position-y: top;
  display: grid;
  place-content: center;
  height: 422px;
  h1 {
    letter-spacing: normal;
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
