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
  width: 75%;
  gap: 1.5rem;
  h4{
    margin: 0;
    margin-top: 42px;
    font-family: 'steinbeckregular';
    font-weight: 600;
    font-size: 12px;
    line-height: 140%;
    /* identical to box height, or 17px */
    text-align: justify;
    text-transform: uppercase;
    color: white;
    span{
      color: rgba(241, 5, 5, 1);
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
  ${ResponsiveTo('md')}{
    width: 100%;
    max-width: 452px;
  }
  ${ResponsiveTo('lg')}{
    max-width: 676px;
  }
  ${ResponsiveTo('xl')}{
    max-width: 868px;
  }
`
