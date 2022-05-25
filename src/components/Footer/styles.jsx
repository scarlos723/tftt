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
    font-family: 'steinbeckregular';
    color: white;
    padding-bottom: 10px;
    letter-spacing: -0.011em;
  }
  h1{
    font-size: 50px;
    line-height: 85%;
    letter-spacing: -0.02rem;
    margin: 0;
  }

  ${ResponsiveTo('md')}{
    gap: 20px;
    h1{
      font-size: 100px;
    }
    p{
      font-size: 16px;
    }
  }

  ${ResponsiveTo('lg')}{
    p{
      font-size: 18px;
      padding-bottom: 20px;
    }
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
