import styled from 'styled-components'
import bgImg from '@/images/home/bgJoinOurWaitList.png'
export const Background = styled.div`
  width: 100%;
  background: url(${bgImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: top;
  height: 780px;
  `

export const Contain = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
  max-width: 847px;
  margin: 0 auto;
  height: 100%;
  gap: 32px;
  button{
    width: 320px;
  }
`
export const Counter = styled.div`
  display: flex;
  flex-flow: row nowrap; 
  width: 326px;
  gap: 12px;
  h2{
    margin: 0;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: rgba(241, 5, 5, 1);
    }
    p{
      margin: 0;
      font-family: 'cooper hewitt light';
      text-transform: uppercase;
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
