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
    width: 91.81px;
    height: 93px;
    margin-left: 20px;
    margin-bottom: -40px;
  }
  .gorilla-group{
    display: none;
  }
  h3{
    font-size: 13px;
    br{
      display: none;
    }
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
    height: 120px;
    padding:16px 0;
    .gorilla-img{
      display: none;
      
    }
    .gorilla-group{
      display: block;
      width: 164.11px;
      height: 78px;
      margin: 0 auto;
      margin-bottom: -20px;
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
    .gorilla-group{
      width: 195.67px;
      height: 93px;
     
      margin-bottom: -40px;
    }
    h3{
      font-size: 20px;
      br{
        display: block;
      }
    }
    button{
    
      width: 168px;
    } 
  }
`
