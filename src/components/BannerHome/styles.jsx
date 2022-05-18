import styled from 'styled-components'
import bgImg from '@/images/home/bgBannerHome.png'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Background = styled.div`
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;

  ${ResponsiveTo('lg')}{
    height: 749.72px;
  }

`
export const Text = styled.section`
  display: grid;
  height: 100%;
`
