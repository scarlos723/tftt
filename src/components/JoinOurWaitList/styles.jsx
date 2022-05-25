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
  height: 520px;
  ${ResponsiveTo('md')}{
    background-size: 135%;
    height: 560px;
    
  }
  ${ResponsiveTo('lg')}{
    height: 576px;
    background-size: contain;
    background-position-y: 20px ;
  }
  ${ResponsiveTo('xl')}{
    height: 780px;
    background-size: auto;
    background-position-y: 110px;
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
  gap: 14px;
  button{
    width: 237px;
  }
  .titles{
    display: flex;
    flex-direction: column;
    gap: 17px;
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
    font-size: 45px;
    }
  p{
    margin: 0;
    font-size: 10px;
    font-family: 'cooper hewitt light';
    text-transform: uppercase;
  }
    .mid-dots {
    display: flex;
    align-items: center;
    padding-bottom: 14px;
  }
  ${ResponsiveTo('lg')}{
    p{
      font-size: 11px;
    }
    h2{
      font-size: 50px;
    }
  }
  ${ResponsiveTo('xl')}{
    h2{
      font-size: 65px;
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
