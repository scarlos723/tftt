import styled from 'styled-components'

import articleImg from '../../assets/images/marketplace/articleImg.png'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 1.5rem;
  ${ResponsiveTo('md')}{
    padding-bottom: 10px;
  }
  ${ResponsiveTo('lg')}{
    margin-top: 1.125rem;
    padding-bottom: 20px;
    background-position-y: bottom;
  }
  ${ResponsiveTo('xl')}{
    margin-top: 2rem;
    background-position-y: center;
  }
`
export const Section = styled.section`
  width: 90%;
  max-width: 283px;
  height: auto;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 64px;
  border: 0.5px solid #FFFFFF;
  position: relative;
  h3{
    padding: 18px 0;
  }
  .share-icon{
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
  ${ResponsiveTo('md')}{
    max-width: 610px;
    h3{
      font-size: 20px;
    }
  }
  ${ResponsiveTo('lg')}{
    max-width: 880px;
    h3{
      padding: 24px 0;
    }
    .share-icon{
      right: 24px;
      bottom: 24px;
    }
  }
  ${ResponsiveTo('xl')}{
    max-width: 1026px;
    h3{
      padding: 30px 0;
    }
    .share-icon{
      right: 30px;
      bottom: 30px;
    }
  }
`
export const Box = styled.div`
  width: 100%;
  height: 120px;
  background: url(${articleImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
  background-position-x: center;
  position: relative;
  .comming{
      display: flex;
      justify-content: center;
      align-items: flex-end;
      position: absolute;
      bottom: 0;
      background: linear-gradient(179.66deg, rgba(217, 217, 217, 0) 0.3%, rgba(0, 0, 0, 0.67) 51.55%);
      background-size: contain; 
      background-position-y: 100%;
      width: 100%;
      height: 40px;
  }
  ${ResponsiveTo('md')}{
    height: 256.25px;
    .comming{
      height: 80px;
    }
  }

  ${ResponsiveTo('lg')}{
    height: 369.25px;
    .comming{
      height: 100px;
    }
  }
  ${ResponsiveTo('xl')}{
    max-width: 1026px;
    height: 431px;
    .comming{
      height: 120px;
    }
  }
`
export const Grid = styled.div`
  display: grid;
  width: 100%;
  height: 120px;
  grid-template-columns:  1fr 1.3fr 1fr;
  place-items: end;
  position: relative;
  article{
    position: relative;
    
    h3{
      display: none;
      opacity: 0;
      transition: all 0.5s;
      padding: 0;
    }
    img{
      width: 100%;
    }
    &:hover{
      h3{
        opacity: 1;
        }
      }
    } 
    .hidden-mb{
      display: none;
    }
  ${ResponsiveTo('md')}{
    grid-template-columns:  1fr 1fr 1.3fr 1fr 1fr;
    height: 256.25px;
    padding-bottom: 38px;
    .hidden-mb{
      display: block;
    }
  }
  ${ResponsiveTo('lg')}{
    height: 369.25px; 
    padding-bottom: 38px;
    article{
      h3{
        display: block;
        font-size: 15px;
      }
    }
  }
  ${ResponsiveTo('xl')}{
    padding-bottom: 0;
  }   
  `
