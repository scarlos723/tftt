import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const Container = styled.div`
  display: grid;
  place-content: center;
  margin-top: 97px;
  ${ResponsiveTo('md')}{
    margin-top: 10px;
  }
  ${ResponsiveTo('lg')}{
    height: 581px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
  }
`
export const Textbox = styled.section`
  display: grid;
  width: 90%;
  max-width: 234px;
  margin: 0 auto;
  gap: 8px;
  h3{
    text-align: left;
  }
  p{
    margin-top: 8px;
  }
  ${ResponsiveTo('md')}{
    max-width: 450px;
    gap: 22px;
    h3:nth-child(1){
      text-align: center;
    }
    p{
      margin-top: 0;
    }
  }
  ${ResponsiveTo('lg')}{
    width: 330px;
    height: 246px;
    position: relative;
    left: -100px;
    z-index: 2;
  }
  ${ResponsiveTo('xl')}{
    width: 413px;
    height: 301px;
  }
`

export const ImgContainer = styled.section`
  display: grid;
  overflow: hidden;
  height: 399px;
  position: relative;
  img{
    width: 493px;
    height: 399px;
    object-fit: cover;
    position: relative;
    left: -40px;
    z-index: 1;
  }
  .gif{
    position: absolute;
    width: 124px;
    height: 125px;
    left: 50%;
    z-index: 2;
  }
  .img-desktop{
    display: none;
  }
  ${ResponsiveTo('md')}{
    .img-desktop{
      display: block;
    }
    .img-mobile{
      display: none;
    }

    img{
      left: 0;
    }
    height: 557px;
  }
  ${ResponsiveTo('lg')}{
    img{
      width: 569px;
      height: 523px;
    }
    .gif{
      top: 20%;
      left: 80%;
    }
  }
  ${ResponsiveTo('xl')}{
    img{
      width: 711px;
      height: 654px;
    }
  }
`
