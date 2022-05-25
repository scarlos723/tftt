import styled from 'styled-components'
import bgImg from '@/images/home/bgJoinOurWaitList.png'
import { ResponsiveTo } from '@/hooks/useResponsive'
export const Background = styled.div`
  width: 100%;
  background: url(${bgImg});
  background-size: 240%;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: top;
  height: 466px;
  ${ResponsiveTo('md')}{
    background-size: contain;
    height: 560px;
    background-position-y: 40px ;
    
  }
  ${ResponsiveTo('lg')}{
    height: 576px;
    background-size: contain;
    background-position-y: -20px ;
  }
  ${ResponsiveTo('xl')}{
    height: 780px;
    background-size: auto;
    background-position-y: 40px;
  }
  
  `

export const Contain = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
 max-width: 237px;
  margin: 0 auto;
  height: 100%;
  gap: 32px;
  button{
    width: 237px;
  }
  ${ResponsiveTo('md')}{
    max-width: 587px;
  }
  ${ResponsiveTo('lg')}{
    max-width: 652px;
    button{
      width: 254px;
    }
  }
  ${ResponsiveTo('xl')}{
    max-width: 847px; 
    button{
      width: 320px; 
    }
  }
`
export const Counter = styled.div`
  display: flex;
  flex-flow: row nowrap; 
  justify-content: center;
  width: 90%;
  max-width: 326px;
  gap: 12px;
  h2{
    margin: 0;
    }
  p{
    margin: 0;
    font-size: 10px;
    font-family: 'cooper hewitt light';
    text-transform: uppercase;
  }
  ${ResponsiveTo('lg')}{
    p{
      font-size: 11 px;
    }
  }
  
`
export const Section = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  color: white;
  .box-number{
    display: flex;
    flex-flow: row nowrap;
    gap: 12px;
  }
  
`
