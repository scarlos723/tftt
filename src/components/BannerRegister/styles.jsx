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
  color: #F10505;
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

export const Paragraph = styled.p`
  text-align: center;
  max-width: 240px;
  margin: 0 auto;
  strong {
    color: #F10505;
    font-weight: 400;
  }
  ${ResponsiveTo('md')} {
    font-size: 13px;
    max-width: 25rem;
  }
`
