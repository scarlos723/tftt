import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const Container = styled.div`
  display: grid;
  place-content: center;
  place-items: center;
  gap: 10px;
  img{
    width: 290.53px;
    height: 158.43px;
  }
  ${ResponsiveTo('md')}{
    img{
      width: 454px;
      height: 247.57px;
      
    }
  }
`

export const Text = styled.div`
  display: grid;
  width: 80%;
  gap: 16px;
  h3{
    margin-bottom: 20px;
  }
  h4{
    margin: 0;
    margin-top: 42px;
    font-family: 'steinbeckregular';
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    /* identical to box height, or 17px */
    text-align: justify;
    text-transform: uppercase;
    color: white;
      span{
        color: rgba(241, 5, 5, 1);
      }
  }
  ${ResponsiveTo('md')}{
    max-width: 452px;
  }
  ${ResponsiveTo('lg')}{
    max-width: 676px;
  }
  ${ResponsiveTo('xl')}{
    max-width: 868px;
  }
`
