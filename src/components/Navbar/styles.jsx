import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Container = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 10;
  //padding: 35px 0;
`
export const Nav = styled.nav`

  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  max-width: 275px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  a{
    text-decoration: none;
  }
 
  ${ResponsiveTo('md')} {

  }
  ${ResponsiveTo('lg')} {
    display: grid;
    grid-template-columns: 126px 1fr 82px;
    place-content: center;
    place-items: center;
    height: 57px;
    width: 90%;
    max-width: 1199px;
    margin: 0 auto;
    margin-top: 52px;
  }
`
export const RightBox = styled.div`
  img{
    width: 21px;
    height: 13.55px;
  }
  h4{
    font-family: 'cooper hewitt';
    font-style: normal;
    font-size: 16px;
    line-height: 116.5%;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    display: none;
  }
  ${ResponsiveTo('lg')}{
    h4{
      display: block;
    }
    img{
      display: none;
    }
  }
`
export const Menu = styled.ul`
  display: flex; 
  flex-direction: column;
  list-style: none;
  width: 100%;
  height: 100vh;
  margin: 0;
  top: 0;
  left: 0;
  li{
    a{
      font-family: 'cooper hewitt light';
      font-style: normal;
      font-size: 16px;
      line-height: 116.5%;
      text-transform: uppercase;
      text-decoration: none;
      color: white;
    }
  }
  ${ResponsiveTo('lg')}{
    flex-direction: row;
    gap: 78px;
    align-items: center;
  }
`
