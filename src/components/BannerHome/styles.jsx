import styled from 'styled-components'
import bgImg from '@/images/home/bgBannerHome.png'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Background = styled.div`
  background: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;

  ${ResponsiveTo('lg')}{
    background: linear-gradient(180deg, 
                  rgba(0, 0, 0, 0) 4.97%, 
                  #000000 83.77%) , url(${bgImg})
                ; 
    background-repeat: no-repeat;
    background-size:  100% 335px, cover;
    background-position-x: center;
    background-position-y: bottom;
    height: 749.72px;
    padding-bottom: 100px;
  }

`
export const Text = styled.section`
  display: grid;
  height: 100%;
  place-content: end;
  place-items: end;
  max-width: 864px;
  margin: 0 auto;
  
`
