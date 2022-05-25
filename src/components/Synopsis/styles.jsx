import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const TextBox = styled.div`
  display: grid;
  width: 90%;
  max-width: 868px;
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
    h3{
    margin-bottom: 31px;
    }
  }
  ${ResponsiveTo('lg')}{
    h3{
    margin-bottom: 44px;
    }
  }
  ${ResponsiveTo('xl')}{
    gap: 24px;
    h3{
    margin-bottom: 27px;
    }
  }
`
