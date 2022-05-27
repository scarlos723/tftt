import styled from 'styled-components'
import bgImg from '../../assets/images/minipopup/bgMiniPopup.png'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  right: 20px;
  bottom: 80px;
  display: grid;
  place-content: center;
  background-image: url(${bgImg}) ;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: top;
  padding: 8px 0 12px 0;
  width: 117px;
  height: auto;
  border-radius: 8px;
  section{
    display: grid;
  }
  .gorilla-img{
    width: 63.16px;
    height: 66px;
    margin: 0 auto;
    margin-bottom: -10px;
  }
  h3{
    font-size: 13px;
  }
  button{
    font-size: 10px;
    width: 88px;
    height: 19px;
    border-radius: 5px;
    padding: 0;
    margin: 0 auto;
  }
  ${ResponsiveTo('md')}{
    width: 209px;
    height: 120px;
    padding:16px 0;
    .gorilla-img{
      width: 62.85px;
      height: 66px;
    }
    h3{
      font-size: 15px;
    }
    button{
      width: 148px;
      font-size: 12px;
    }
  }
  
  ${ResponsiveTo('xl')}{
    width: 229px;
    height: 157px;
    .gorilla-img{
      width: 89px;
      height: 93px;
    }
    h3{
      font-size: 20px;
      }
    button{
      width: 168px;
    } 
  }
`
