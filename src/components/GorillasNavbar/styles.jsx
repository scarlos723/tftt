import styled, { css } from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'
import { Link } from 'react-router-dom'
import menuIcon from '@/icons/navbar/menuIconMb.svg'
import menuIconMd from '@/icons/navbar/menuIconTb.svg'
import iconClose from '@/icons/navbar/iconClose.svg'

export const Container = styled.div`
  width: 100%;
  position: fixed;
  z-index: 10;
  background: linear-gradient(180deg, #000000 0%, rgba(0,0,0,0.7) 35%, rgba(0,212,255,0) 100%);
  transition: all 2s;
`

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 35px 1rem;
  a{
    text-decoration: none;
  }

  ${ResponsiveTo('md')} {
    padding: 35px 3rem;
  }
  ${ResponsiveTo('lg')} {
    display: grid;
    grid-template-columns: 240px 1fr;
    place-content: center;
    place-items: center;
    width: 90%;
    max-width: 901px;
    margin: 0 auto;
    padding: 35px 0;
    //margin-top: 52px;
  }
  ${ResponsiveTo('xl')} {
    grid-template-columns: 280px 1fr;
    max-width: 1199px;
  }
`

export const GrimeHome = styled(Link)`
  font-family: 'Cooper Hewitt', sans-serif;
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  ${ResponsiveTo('md')} {
    margin: 0;
    font-size: 30px;
  }
  ${ResponsiveTo('xl')} {
    font-size: 2.25rem;
  }
`

// ESto otro
export const RightBox = styled.div`
  ${ResponsiveTo('lg')}{
    display: none;
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
    font-family: 'cooper hewitt light';
    font-style: normal;
    font-size: 16px;
    line-height: 116.5%;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    a {
      color: white;
    }
  }
  li:nth-last-child(1) {
    font-family: 'cooper hewitt';
  }
  & > a:first-child{
    margin-top: 45px;
    margin-bottom: 1rem;
    text-align: center;
  }
  & > li:last-child{
    border-bottom: none;
    margin-top: 2rem;
    svg {
      width: 70px;
      height: 33px;
    }
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
  }
  ${ResponsiveTo('lg')}{
    padding: 0 20px;
    display: flex;
    flex-flow: row nowrap;
    gap: 44px;
    justify-content: end;
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
    & > a:first-child,
    & > li:last-child {
      display: none;
    }
    .li-logo{
      display: none;
    }
  }
  ${ResponsiveTo('xl')}{
    gap: 78px;
  }
`

