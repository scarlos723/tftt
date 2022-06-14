import styled, { css } from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'
export const BannerContainer = styled.section`
  display: grid;
  place-content: center;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),
    url(${props => props.bgImg});
  background-repeat: no-repeat;
  background-size: auto, cover;
  background-position-x: center;
  background-position-y: center, bottom;
  height: 453.12px;
  div{
    width: 299px;
    height: 349px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    article{
      width: 299px;
      height: 299px;
      border-radius: 50%;
      border: 50px solid ${props => props.color};
      mix-blend-mode: screen;
      position: absolute;
      top: 0;
    }
    .gorilla-img{
      position: relative;
      top: 0;
      width: 265px;
      height: 274px;
      background: url(${props => props.gorilla});
      background-repeat: no-repeat;
      background-size: 100%;
      background-position-x: center;
    }
  }
  ${ResponsiveTo('lg')}{
    height: 853.12px;
    div{
      width: 599px;
      height: 649px;
      article{
        width: 599px;
        height: 599px;
        border: 100px solid ${props => props.color};
      }
      .gorilla-img{
        width: 565px;
        height: 574px;
        background-size: auto;
      }
    }
  }
`
export const Title = styled.div`
  padding: 0 30px;
  h2{
    display: flex;
    flex-direction: row ;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    img{
      position: relative;
      top: -1px;
      width: 32px;
      height: 36px;
    }
  }
  p{
    font-size: 16px;
  }
  ${ResponsiveTo('lg')}{
    padding: 0;
    h2{
      font-size: 65px;
      img{
        top: -2px;
        width: 41px;
        height: 63px;
      }
    }
  }
`
export const SectionText = styled.section`
  display: grid;
  place-content: center;
  div{
    max-width: 849px;
  }
`
export const GridSection = styled.section`
  display: grid;
  place-content: center;
  margin-top: 216px;
  padding: 0 30px;
  .grid{
    max-width: 849px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .text-box{
    h2,p{
      text-align: center;
    }
    h2{
      ${props => props.isGeneral
    ? css`
        font-size: 30px;
        `
    : css`
        font-size: 25px;
        `
}   
      
    }
    p{
      font-size: 16px;
    }
    em{
      font-style: normal;
    }
  }
  article{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #FFFFFF;
    border-radius: 9px;
    gap: 23px;
    ${props => props.isTheGeneral
    ? css`
    width: 241px;
    height: 234px;
    `
    : css`
    width: 221px;
    height: 202px;
    `}
    }
    h2{
      font-size: 50px;
    }
    h3{
      font-size: 20px;
    }
  ${ResponsiveTo('lg')}{
    padding: 0;
    .grid{
      max-width: 849px;
      display: grid;
      grid-template-columns: 599px 241px;
      gap: 22px;
    }
    .text-box{
      h2,p{
        text-align: left;
      }
      h2{
      ${props => props.isGeneral
    ? css`
        font-size: 65px;
        `
    : css`
        font-size: 55px;
        `
}   
      }
    }
  } 
`

export const FootBanner = styled.section`
  display: grid;
  width: 100;
  height: 431px;
  margin-top: -20px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #000000 100%),
    url(${props => props.bgImg});
  background-repeat: no-repeat;
  background-size: 100% 327px, cover;
  background-position-x: center;
  background-position-y: top, center;
`

export const AboutSection = styled.section`
  padding: 0 30px;
  margin: 0 auto;
  display: grid;
  gap: 32px;
  
  h5,ul,li,p{
    color: white;
    font-family: 'steinbeckregular';
  }
  p,li,h5{
    font-size: 16px;
    font-weight: 100;
  }
  h5{
    font-family: 'Cooper Hewitt';
  }
  h3{
    font-size: 20px;
    margin-top:16px;
  }
  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    li{
      list-style: disc;
      margin-left: 16px;
      font-weight: 300;
      
    }
  }
  .signs-box{
    display: flex;
    gap: 70px;
    article{
      display: grid;
      place-content: center;
      place-items: center;
      gap: 16px;
    }
  }
  ${ResponsiveTo('lg')}{
    padding: 0;
    max-width: 849px;
    margin: 0 auto;
    display: grid;
    gap: 32px;
  }
`
