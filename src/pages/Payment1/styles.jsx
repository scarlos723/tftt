import styled from 'styled-components'
import bgBanner from '@/images/register/banner.png'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const BackgroundBanner = styled.section`
  display: grid;
  place-content: center;
  place-items: center;
  height: 219px;
  background:url(${bgBanner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: bottom;
  
  ${ResponsiveTo('md')} {
    height: 419px;
  }
`
