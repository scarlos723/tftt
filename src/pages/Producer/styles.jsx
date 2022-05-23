import styled from 'styled-components'
import gbImg from '@/images/producer/xImg.png'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const ProducerTitle = styled.h2`
  margin-top: 84px;
  ${ResponsiveTo('md')}{
    margin-top: 78px;
  }
  ${ResponsiveTo('lg')}{
    margin-top: 90px;
  }
  ${ResponsiveTo('xl')}{
    margin-top: 140px;
  }
`
export const BgFinalText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 1030px;
  background-image: url(${gbImg});
  background-repeat: no-repeat;
  background-size: 120%;
  background-position-x: center; 
  background-position-y: 100%;
  margin-bottom: -300px;

  ${ResponsiveTo('md')}{
    height: 882px;
    background-size: 682px 716px;
    background-position-y: 140%;
    margin-bottom: -260px;
  }
  ${ResponsiveTo('lg')}{
    height: 824px;
  }

  `
