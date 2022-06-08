import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'
import bgImg from '../../assets/images/marketplace/bgFirstCollection.png'

import picture1 from '@/images/marketplace/picture1.png'
import picture2 from '@/images/marketplace/picture2.png'
import picture3 from '@/images/marketplace/picture3.png'

import hover1 from '@/images/marketplace/hover1.png'
import hover2 from '@/images/marketplace/hover2.png'
import hover3 from '@/images/marketplace/hover3.png'

export const Container = styled.div`
  margin-top: 64px;
  background: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
  background-position-x: center;
  h3{
    margin-bottom: 16px;
  }
  margin-bottom: 72px;
  ${ResponsiveTo('md')}{
    h3{
      margin-bottom: 37px;
    }
    margin-bottom: 84px;
  }
  ${ResponsiveTo('lg')}{
    h3{
      margin-bottom: 40px;
    }
  }
  ${ResponsiveTo('xl')}{
    h3{
      margin-bottom: 47px;
    }
    margin-bottom: 112px;
  }

`
export const Title = styled.div`
  display: grid;
  place-items: center;
  margin-bottom: 42px;
  .text{
    display: flex;
    align-items: center;
    gap: 10px;
    img{
      width: 68px;
      height: 31px; 
    }
    h3{
      font-size: 18px;
      margin: 0;
    }
  }
  h1{
    margin-top: -10px;
    font-size: 40px;
    letter-spacing: 0.01rem;
  }
  ${ResponsiveTo('md')}{
    margin-bottom: 68px;
    .text{
      gap: 20px;
      img{
        width: 94px;
        height: 42.52px;
      }
      h3{
        font-size: 26px;
      }
    }
    h1{
      font-size: 65px;
    }
  }
  ${ResponsiveTo('lg')}{
    margin-bottom: 81px;
    h1{
      font-size: 80px;
    }
  }
  ${ResponsiveTo('xl')}{
    .text{
      gap: 16px;
      img{
        width: 126px;
        height: 57px;
      }
      h3{
        font-size: 36px;
      }
    }
    h1{
      margin-top: -18px;
      font-size: 90px;
    }
  }
`
export const Section = styled.section`  
  display: grid; 
  place-content: center;
  width: 90%;
  max-width: 283px;
  margin: 0 auto;
  ${ResponsiveTo('md')}{
    max-width: 610px;
  }
  ${ResponsiveTo('lg')}{
    max-width: 896px;
  }
  ${ResponsiveTo('xl')}{
    max-width: 1000px;
  }
`
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 169px 109px;
  gap: 16px 10px;
  margin-top: 16px;
  width: 241px;
  overflow: hidden;
  article{
    border-radius: 10px;
    transition: all 0.3s;
    background-color: white;
  }
  article:nth-child(1){
    background-image: url(${picture1});
    &:hover{
      background-image: url(${hover1});
    }
  }
  article:nth-child(2){
    background-image: url(${picture2});
    &:hover{
      background-image: url(${hover2});
    }
  }
  article:nth-child(3){
    background-image: url(${picture3});
    grid-column: span 2;
    width: 242px;
    height: 109px;
    
    &:hover{
      background-image: url(${hover3});
    }
  }
  article{
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: center;
    background-position-x: center;
    &:hover{
      border-radius: 0;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  article:nth-child(3){
    background-position-y: -50px;
    &:hover{
      border-radius: 0;
    }
  }
  ${ResponsiveTo('md')}{
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    justify-content: center;
    gap: 30px;
    article, article:nth-child(3){
      border-radius: 18px;
      width: 166.03px;
      height: 255.81px;
      grid-column: unset;
      background-position-y: center;
    }
  }
  ${ResponsiveTo('lg')}{
    gap: 36px;
    article, article:nth-child(3){
      width: 239.24px;
      height: 368.61px
    }
  }
  ${ResponsiveTo('xl')}{
    gap: 48px;
    article, article:nth-child(3){
      width: 270px;
      height: 416px;
    }
  }
`
export const RowButton = styled.button`
  color: rgba(199, 199, 199, 0.87);
  font-size: 30px;
  font-stretch: expanded;
`
// export const Article = styled.article`

//   ${ResponsiveTo('md')}{
//     width: 166.03px;
//     height: 255.81px;
//     border-radius: 20px;
//   }
//   ${ResponsiveTo('lg')}{
//     width: 239.24px;
//     height: 368.61px;
//   }
//   ${ResponsiveTo('xl')}{
//     width: 270px;
//     height: 416px;
//   }
// `
export const TextBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 236px;
  margin: 0 auto;
  gap: 8px;
  margin-top: 57px;
  h3, p{ 
    text-align:center;
  }
  h3{
    font-family: "cooper hewitt";
    font-size: 13px;
    margin-bottom: 0;
  }
  p{
    font-family: "steinbeckregular";
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
    margin-top: 72px;
    button{
      width: 204px;
      height: 46px;
      font-size: 15px;
      margin: 0 auto;
      margin-top: 20px;
    }
    h3{
      font-size: 15px;
    }
    p{ 
      font-size: 14px;
    }
  }

  ${ResponsiveTo('lg')}{
    margin-top: 87px;
  }
  ${ResponsiveTo('xl')}{
    width: 866px;
    margin-top: 132px;
    h3{
      font-size: 20px;
    }
    button{
      width: 320px;
    }
    p{
      font-size: 16px;
    }
  }
`
