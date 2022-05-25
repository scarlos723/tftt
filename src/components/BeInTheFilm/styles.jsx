import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const TextBox = styled.div`
  width: 70%;
  
  margin: 85px auto;
  p{
    text-align: center;
  }
  h2{
    margin-bottom: 11px;
  }
  ${ResponsiveTo('md')}{
    max-width: 480px;
  }
  ${ResponsiveTo('lg')}{
    max-width: 676px;
    h3{
      margin-bottom: 25px;
    }
  }
  ${ResponsiveTo('xl')}{
    max-width: 868px;
    h4{
      margin-bottom: 14px;
    }
  }
`
