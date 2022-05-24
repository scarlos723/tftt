import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const TextBox = styled.div`
  width: 90%;
  max-width: 868px;
  height: 270px;
  margin: 85px auto;
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
    h3{
    margin-bottom: 27px;
    }
  }
`
