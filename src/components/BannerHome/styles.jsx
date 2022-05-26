import styled from 'styled-components'
import bgImg from '@/images/home/bgBannerHome.png'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Background = styled.div`
  width: 100%;
  display: grid;
  background: linear-gradient(180deg, 
                  rgba(0, 0, 0, 0) 4.97%, 
                  #000000 83.77%) , url(${bgImg})
                ; 
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: bottom;
  height: 320px;
  ${ResponsiveTo('md')}{
    height: 609px;
    background-position-y: 120px, bottom;
  }
  ${ResponsiveTo('lg')}{
    background-size:  100% 335px, cover;
    height: 599px;
    padding-bottom: 100px;
    background-position-y: bottom;
  }
  ${ResponsiveTo('xl')}{
    height: 750px;
  }

`
export const Text = styled.section`
  display: grid;
  place-content: end;
  height: 100%;
  max-width: 221px;
  margin: 0 auto;
  h1{
    margin: 0 auto;
  }
  ${ResponsiveTo('md')}{
    max-width: 610px;
    padding-bottom: 91px;
  }
  ${ResponsiveTo('lg')}{
    max-width: 864px;
    padding-bottom: 100px;
  }
  
`
