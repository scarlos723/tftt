import styled from 'styled-components'
import bgImg from '@/images/home/bgOurWhiteList.png'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Container = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: 160%;
  background-position-x: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  ${ResponsiveTo('md')}{
    height: 500px;
    background-size: cover;
  }
  ${ResponsiveTo('lg')}{
    height: 520px;
  }
  ${ResponsiveTo('xl')}{
    background-size:  1280px 619px;
    height: 670px;
  }
`
export const TextBox = styled.div`
  height: 40%;
  display: grid;
  place-content: center;
  place-items: center;
  h1{
    letter-spacing: 0.1em;
    padding: 0 1.75rem;
    margin-bottom: 2rem;
    line-height: 113%;
  }
  button{
    margin-top: 1.5rem;
    width: 100%;
    padding: 8px 0;
    max-width: 192px;
  }
  h3 {
    line-height: 140%;
  }
  ${ResponsiveTo('md')}{
    height:auto;
    h1{
      font-size: 50px;
      margin-bottom: 1.5rem;
    }
    button {
      margin-top: 0.75rem;
      max-width: 232px;
      padding: 10px 0;
    }
  }
  ${ResponsiveTo('xl')}{
    h1{
      font-size: 65px;
    }
    h3 {
      font-size: 20px;
    }
    button {
      padding: 18px 0;
      max-width: 310px;
    }
  }
`
