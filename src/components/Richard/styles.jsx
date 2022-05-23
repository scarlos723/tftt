import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'
import { Container } from '../TerryStone/styles'

export const ContainerRichard = styled(Container)`

  ${ResponsiveTo('md')}{
    img{
      width: 389px;
      height: 220px;
    }
  }
`
