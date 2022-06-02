import styled from 'styled-components'
import bgImg from '@/images/home/bgOurWhiteList.png'
import { ResponsiveTo } from '../../hooks/useResponsive'
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
    padding: 0 50px;
    margin-bottom: 8px;
  }
  button{
    margin-top: 12px;
    width: 192.41px;
    height: 30.17px;
    padding: 0;
  }
  ${ResponsiveTo('md')}{
    height:auto;
    h1{
      font-size: 50px;
    }
  }
  ${ResponsiveTo('xl')}{
    h1{
      font-size: 65px;
    }
  }
`
