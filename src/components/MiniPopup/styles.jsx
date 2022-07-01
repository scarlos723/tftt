import styled from 'styled-components'
import bgImg from '../../assets/images/minipopup/bgMiniPopup.png'
import bgImg2 from '../../assets/images/minipopup/bgGeneral.png'
import bgImg3 from '../../assets/images/popup/bgPopup2.png'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  right: 20px;
  bottom: 80px;
  background-image:url(${bgImg2}), url(${bgImg}) ;
  background-repeat: no-repeat;
  background-size:contain,cover;
  background-position-x: center;
  background-position-y: bottom, top;
  padding: 12px 8px 8px 8px;
  width: 117px;
  height: 144px;
  border-radius: 8px;
  section{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    div{
      display: grid;
      place-content: center;
    }
  }
  
  h3{
    font-size: 6px;
    br{
      display: none;
    }
  }
  h2{
    font-size: 10px;
  }
  button{
    font-size: 10px;
    width: 88px;
    height: 19px;
    border-radius: 5px;
    padding: 0;
    margin: 0 auto;
    margin-top: 4px;
  }
  ${ResponsiveTo('md')}{
    width: 209px;
    height: 170px;
    padding:16px 0;
    background-image:url(${bgImg3}), url(${bgImg}) ;
    background-repeat: no-repeat;
    background-size:contain,cover;
    background-position-x: center;
    background-position-y: bottom, top;
    h3{
      font-size: 8px;
    }
    button{
      width: 148px;
      font-size: 12px;
    }
  }
  ${ResponsiveTo('lg')}{
    width: 229px;
    height: 191px;
    h2{
      font-size: 15px;
    }
    h3{
      font-size: 10px;
    }
  }
`
