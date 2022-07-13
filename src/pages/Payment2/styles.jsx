import styled from 'styled-components'
import bgBanner from '@/images/popupStayTuned/bgGraffiti.png'
import { ResponsiveTo } from '../../hooks/useResponsive'
export const BackgroundBanner = styled.section`
  display: grid;
  place-content: center;
  place-items: center;
  height: 219px;
  background-image: url(${bgBanner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: bottom;
  
  ${ResponsiveTo('md')} {
    height: 419px;
    background-size: contain;
  }
  ${ResponsiveTo('xl')} {
    background-position-y: center;
  }
`
