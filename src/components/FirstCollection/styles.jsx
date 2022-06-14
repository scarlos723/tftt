import styled from 'styled-components'

import articleImg from '../../assets/images/marketplace/articleImg.png'
import shadowImg from '../../assets/images/marketplace/shadow.png'
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
    z-index: 1;
    bottom: 0;
    background: url(${shadowImg});
    background-size: 100% 100%; 
    background-position-y: center;
    width: 100%;
    height: 70%;
    .hover-text{
        display: none;
        font-size: 35px;
    }
  }
  .hover-grid{
    opacity: 0;
    position: absolute;
    z-index: 2;
    top: 0;
    display: grid;
    width: 100%;
    height: 120px;
    background: #00000082;
    grid-template-columns:  1fr 1.3fr 1fr;
    .hidden-mb{
      display: none;
    }
    article{
      cursor: pointer;
      h3{
        padding: 0;
        opacity: 0;
      }
      &:hover{
        h3{
          opacity: 1;
        }
      }
    }
  }
  &:hover{
    .comming{
      h2{
        display: none;
      }
      .hover-text{
        display: block;
      }
      padding-bottom: 20px;
    }
    .hover-grid{
      opacity: 1;
      
    }
  }
  ${ResponsiveTo('md')}{
    height: 256.25px;
    .comming{
      .hover-text{
        font-size: 55px;
      }
    }
    .hover-grid{
      grid-template-columns:  1fr 1fr 1.3fr 1fr 1fr;
      height: 256.25px;
      .hidden-mb{
      display: block;
      }
      article{
        h3{
          margin-top: 20px;
        }
      }
    }
  }

  ${ResponsiveTo('lg')}{
    height: 369.25px;
    .comming{
      .hover-text{
        font-size: 70px;
      }
    }
    .hover-grid{
      height: 369.25px; 
      
      article{
        h3{
          margin-top: 136px;
        }
      }
      .middle{
        h3{
          margin-top: 96px;
        }
      }
    }
  }
  ${ResponsiveTo('xl')}{
    max-width: 1026px;
    height: 431px;
    .comming{
      .hover-text{
        font-size: 75px;
      }
    }
    .hover-grid{
      height: 100%;
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
    img{
      width: 100%;
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
  }
  ${ResponsiveTo('xl')}{
    padding-bottom: 0;
  }   
  `
