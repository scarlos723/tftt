import styled, { css } from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'
import menuIcon from '@/icons/navbar/menuIconMb.svg'
import menuIconMd from '@/icons/navbar/menuIconTb.svg'
import iconClose from '@/icons/navbar/iconClose.svg'
export const Container = styled.div`
  width: 100%;
  position: fixed;
  z-index: 10;
  padding: 35px 0;
  background: transparent;
  transition: all 2s;

  ${props => props.gradient
    ? css`
    background: linear-gradient(180deg, #000000 0%, rgba(0,0,0,0.7) 35%, rgba(0,212,255,0) 100%);
    `
    : css`
    background: transparent;
    `
}
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
  svg {
    width: 70px;
    height: 33px;
  }

  ${ResponsiveTo('md')} {
    max-width: 708px;
    svg {
      width: 126px;
      height: 57px;
    }
  }
  ${ResponsiveTo('lg')} {
    display: grid;
    grid-template-columns: 126px 1fr 82px;
    place-content: center;
    place-items: center;
    height: 57px;
    width: 90%;
    max-width: 901px;
    margin: 0 auto;
  }
  ${ResponsiveTo('xl')} {
    max-width: 1199px;
  }
`
export const RightBox = styled.div`
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
  }
`
export const MenuIcon = styled.div`
  width: 21px;
  height: 13.55px;
  background-image: url(${menuIcon});
  background-size: 100%;
  background-repeat: no-repeat;
  transition: all 0.2s;
  ${props => props.isOpen && css`
    width: 36px;
    background-image: url(${iconClose});
    background-size: 100%;
    background-repeat: no-repeat;
    width: 36px;
    height: 36px;
  `};
  
  
  
  
  ${ResponsiveTo('md')}{
    width: 33px;
    height: 22px;
    background-image: url(${menuIconMd});
    background-size: contain;
    background-repeat: no-repeat; 
    ${props => props.isOpen && css`
      width: 36px;
      background-image: url(${iconClose});
      background-size: 100%;
      background-repeat: no-repeat;
      width: 54px;
      height: 54px;
    `};
  }
  ${ResponsiveTo('lg')}{
    display: none;
  }

`
export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;

  list-style: none;
  background-color: black;
  width: 235px;
  height: 100vh;
  margin: 0;
  top: 0;
  left: 0;
  opacity: 1;
  transition: all 0.3s;

  ${props => props.isOpen
    ? css`
    opacity: 1;
    left: 0;
    `
    : css`
    opacity: 0;
    left: -236px  `};

  padding: 0 22px;
  li{
    display: grid;
    place-content: center;
    height: 55px;
    border-bottom: 0.5px solid white;
    a{
      font-family: 'cooper hewitt light';
      font-style: normal;
      font-size: 16px;
      line-height: 116.5%;
      text-transform: uppercase;
      text-decoration: none;
      color: white;
      span{
        color: #F10505;
      }
    }
  }
  li:first-child{
    margin-top: 45px;
  }
  .join-text{
    a{
      font-family: 'cooper hewitt';
      font-style: normal;
      font-size: 16px;
      line-height: 116.5%;
      text-align: center;
      text-transform: uppercase;
      color: #FFFFFF;
    }
    border: none;
  }
  ${ResponsiveTo('md')}{
    width: 538px;
    padding: 0 49px;
    ${props => props.isOpen
    ? css`
    opacity: 1;
    left: 0;
    `
    : css`
    opacity: 0;
    left: -539px  `};
    li:first-child{
      height: 6rem;
    }
  }
  ${ResponsiveTo('lg')}{
    padding: 0 20px;
    display: flex;
    flex-flow: row nowrap;
    gap: 44px;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    width: 100%;
    height: auto;
    position: relative;
    opacity: 1;
    left: 0;
    li{
      height: auto;
      border: none;
    }
    li:first-child {
      display: none;
    }
    .li-logo{
      display: none;
    }
    .join-text{
      display: none;
    }
  }
  ${ResponsiveTo('xl')}{
    gap: 78px;
  }
`
