import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const TermsContainer = styled.div`
  margin-top: -10rem;
  padding: 0 2.5rem;
  ${ResponsiveTo('md')} {
    margin-top: -18rem;
    padding: 0;
  }
  ${ResponsiveTo('xl')} {
    margin-top: -38rem;
  }
`

export const Title = styled.h1`
  font-weight: 700;
  letter-spacing: normal;
  margin-bottom: 1.75rem;
  ${ResponsiveTo('md')} {
    font-size: 50px;
    line-height: 65px;
    margin-bottom: 3rem;
  }
  ${ResponsiveTo('xl')} {
    font-size: 65px;
    line-height: 84px;
    margin-bottom: 6.5rem;
  }
`

export const Paragraph = styled.div`
  max-width: 450px;
  margin: 0 auto;
  color: white;
  font-weight: 300;
  line-height: 140%;
  h2 {
    font-family: 'Cooper Hewitt';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 140%;
    text-transform: uppercase;
    color: #F10505;
    text-align: left;
  }
  li::before {
    content: '•';
    margin-right: 0.5rem;
  }
  ${ResponsiveTo('lg')} {
    max-width: 676px;
  }
  ${ResponsiveTo('xl')} {
    max-width: 846px;
    font-size: 14px;
  }
`
