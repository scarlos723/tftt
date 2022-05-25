import styled from 'styled-components'
import bgImg from '../../assets/images/marketplace/bgFirstCollection.png'
import articleImg from '../../assets/images/marketplace/articleImg.png'
import { ResponsiveTo } from '../../hooks/useResponsive'
export const Container = styled.div`
  width: 100%;
  height: 513px;
  background: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: top;
  background-position-x: center;
  margin-top: 65px;
  ${ResponsiveTo('md')}{
    height: 768px;
    margin-top: 81px;
  }
  ${ResponsiveTo('lg')}{
    margin-top: 0;
    padding-top: 144px;
    height: 900px;
    background-position-y: bottom;
  }
  ${ResponsiveTo('xl')}{
    padding-top: 244px;
    height: 1080px;
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
export const Article = styled.article`
  width: 100%;
  height: 188.76px;
  background: url(${articleImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
  background-position-x: center;
  h2{
    position: relative;
    top: 70%;
  }
  ${ResponsiveTo('md')}{

  }

  ${ResponsiveTo('lg')}{
    height: 268.15px;
  }
  ${ResponsiveTo('xl')}{
    height: 313px;
  }
`
export const TextBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  
  width: 236px;
  margin: 0 auto;
  gap: 8px;
  h3, p{ 
    font-family: "steinbeckregular";
    text-align:center;
  }
  button{
    width: 155px;
    height: 32px;
    margin: 0 auto;
    margin-top: 20px;
    font-size: 13px;
    line-height: 140%;
    padding: 0;
  }
  ${ResponsiveTo('md')}{
    width: 610px;
    
    button{
      width: 204px;
      height: 46px;
      font-size: 15px;
      margin: 0 auto;
      margin-top: 20px;
    }
    p{ 
      font-size: 14px;
    }
  }

  ${ResponsiveTo('xl')}{
    width: 866px;;
    button{
      width: 320px;
    }
    p{
      font-size: 16px;
    }
  }
`
