import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const TextBox = styled.div`
  width: 90%;
  max-width: 868px;
  margin: 85px auto;
  p{
    text-align: center;
  }
  h2{
    margin-bottom: 11px;
  }
  ${ResponsiveTo('lg')}{
    h3{
      margin-bottom: 25px;
    }
  }
  ${ResponsiveTo('xl')}{
    h4{
      margin-bottom: 14px;
    }
  }
`
