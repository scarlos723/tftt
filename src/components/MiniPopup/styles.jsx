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
  background-position-y: center;
  padding: 28px 17px 14px 17px;
  width: 117px;
  height: 119px;
  border-radius: 8px;
  section{
    display: grid;
    gap: 10px;
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
    padding:22px 30px;
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
    h3{
      font-size: 20px;
      }
    button{
      width: 168px;
    } 
  }
`
