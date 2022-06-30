import styled from 'styled-components'
import bgImg from '../../assets/images/marketplace/bgMarketPlace.png'
import { ResponsiveTo } from '../../hooks/useResponsive'
export const Background = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
  height: 320px;
  background: url(${bgImg});
  background-size: 130%;
  background-repeat: no-repeat;
  background-position-x: 90%;
  background-position-y: center;
  ${ResponsiveTo('md')}{
    height: 540px;
    background-size: 120%;
    background-position-x: right;
    background-position-y: center;
  }
  ${ResponsiveTo('lg')}{
    height: 620px;
    background-size: cover;
    background-position-y: top;
  }
`
export const TextSection = styled.section`
  width: 100%;
  max-width: 240px;
  margin-top: 40%;
  p,h1{
    text-align: center;
  }
  h1{
    letter-spacing: 0.06em;
  }
  ${ResponsiveTo('md')}{
    margin-top: 30%;
    max-width: 580px;
  }
  ${ResponsiveTo('lg')}{
    margin-top: 20%;
  }
  ${ResponsiveTo('xl')}{
    h1{
      font-size: 65px;
    }
    max-width: 677px;
  }
`
