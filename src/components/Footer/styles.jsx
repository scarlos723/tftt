import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Container = styled.div`
  position: relative;
  z-index: 5;
  width: 100%;
  height: 256px;
  ${ResponsiveTo('md')}{
    height: 318px;
  }

  ${ResponsiveTo('lg')}{
    height: 388px;
  }
  ${ResponsiveTo('xl')}{
    height: auto;
  }
`
export const Contain = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 8px;
  height: 100%;
  justify-content: center;
  align-items: center;
  /* max-width: 706px; */
  margin: 0 auto;
  h1, div{
    position: relative;
    z-index: 1;
  }
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
    font-size: 40px;
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
export const ImgTFTT = styled.div`
  display: grid;
  position: relative;
  z-index: 0;
  width: 123px;
  height: 64px;
  margin-bottom: -20px;
  img{
    width: 100%;
  }
  .fade-img{
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
  }
  ${ResponsiveTo('md')}{
    width: 211px;
    height: 110px;
    margin-bottom: -40px;
  }
  ${ResponsiveTo('lg')}{
    width: 285px;
    height: 148px;
    margin-bottom: -50px;
  }
  ${ResponsiveTo('xl')}{
    width: 429px;
    height: 222px;
    margin-bottom: -70px;
  }

`
