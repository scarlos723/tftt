import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const TextBox = styled.div`
  display: grid;
  width: 70%;
  
  height: auto;
  margin: 85px auto;
  gap: 24px;
  p{
    span{
      strong{
        text-shadow: 0px 0px 1px #F10505;
      }
    }
  }
  h3{
    margin-bottom: 23px;
  }
  ${ResponsiveTo('md')}{
    max-width: 480px;
    h3{
    margin-bottom: 31px;
    }
  }
  ${ResponsiveTo('lg')}{
    max-width: 676px;
    h3{
    margin-bottom: 44px;
    }
  }
  ${ResponsiveTo('xl')}{
    max-width: 868px; 
    gap: 24px;
    h3{
    margin-bottom: 27px;
    }
  }
`
