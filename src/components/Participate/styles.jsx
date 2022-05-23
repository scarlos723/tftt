import styled from 'styled-components'
import bgImg from '@/images/filmcoin/bgParticipate.png'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const Container = styled.div`
  display: grid;
  height: 403px;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  ${ResponsiveTo('md')}{
    height: 581px;
    padding: 80px 0;
  }
  ${ResponsiveTo('xl')}{
    background-size: contain;
    height: 600px;
  }
`
export const Box = styled.div`
  display: grid;
  width: 90%;
  max-width: 234px;
  margin: 0 auto;
  .icons-container{
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    gap: 56px;
    article{
      display: grid;
      cursor: pointer;
      width: 87.85px;
      height: 141.05px;
      img{
        width: 100%;
      }
    }
  }

  ${ResponsiveTo('md')}{
    max-width: 368px;
    .icons-container{
      gap: 132px;
      article{
        width: 116.01px;
        height: 186.27px;
      }
    }
  }
  ${ResponsiveTo('lg')}{
    max-width: 684px;
  }
  ${ResponsiveTo('xl')}{
    max-width: 826px;
  }
`
