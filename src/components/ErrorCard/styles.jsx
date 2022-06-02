import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const WrongIcon = styled.div`
  width: 74.26px;
  height: 74.26px;
  margin: 0 auto;
  text-align: center;
  img{
    width: 100%;
    height: 100%;
  }
  ${ResponsiveTo('xl')}{
    width: 80px;
    height: 80px;
  }
`
