import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'
export const Container = styled.div`
  width: 100%;
  height: 256px;
  ${ResponsiveTo('md')}{
    height: 318px;
  }

  ${ResponsiveTo('lg')}{
    height: 388px;
  }
  ${ResponsiveTo('xl')}{
    height: 596px;
  }
`
export const Contain = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 8px;
  height: 100%;
  justify-content: center;
  align-items: center;
  max-width: 706px;
  margin: 0 auto;
  div{
    display: grid;
    place-items: center;
  }
  p{
    font-family: 'cooper hewitt light';
    
    color: white;
    padding-bottom: 12px;
  }
  h1{
    font-size: 50px;
    line-height: 85%;
    letter-spacing: -0.02rem;
    margin: 0;
        color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: rgba(241, 5, 5, 1);
  }

  ${ResponsiveTo('md')}{
    gap: 20px;
    h1{
      font-size: 100px;
    }
  }

  ${ResponsiveTo('lg')}{
    h1{
      font-size: 124px;
    }
  }
  ${ResponsiveTo('xl')}{
    gap: 40px;
    h1{
      font-size: 144px;
    }
  }
`
