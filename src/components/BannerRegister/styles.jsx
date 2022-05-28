import styled from 'styled-components'
import bannerBg from '@/images/register/banner.png'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Container = styled.div`
  height: 20rem;
  background-image: url(${bannerBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: end;
  ${ResponsiveTo('md')} {
    height: 36.5rem;
  }
  ${ResponsiveTo('xl')} {
    height: 54rem;
    justify-content: center;
  }
`

export const Title = styled.h1`
  letter-spacing: normal;
  ${ResponsiveTo('md')} {
    font-size: 50px;
    line-height: 65px;
  }
  ${ResponsiveTo('xl')} {
    font-size: 65px;
    line-height: 84px;
    margin-top: 6rem;
  }
`

export const Subtitle = styled.h2`
  color: #0E8C0D;
  font-size: 13px;
  line-height: 17px;
  margin-bottom: 2.125rem;
  ${ResponsiveTo('md')} {
    font-size: 15px;
    line-height: 19px;
    margin-bottom: 3.5rem;
  }
  ${ResponsiveTo('xl')} {
    font-size: 20px;
    line-height: 26px;
  }
`
