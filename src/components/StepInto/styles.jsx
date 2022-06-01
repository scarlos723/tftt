import styled from 'styled-components'
import bgImg from '@/images/home/bgStepInto.png'
import img1 from '../../assets/images/home/stepImg1.png'
import img2 from '../../assets/images/home/stepImg2.png'
import img3 from '../../assets/images/home/stepImg3.jpg'
import hover1 from '../../assets/images/home/hover1.png'
import hover2 from '../../assets/images/home/hover2.png'
import hover3 from '../../assets/images/home/hover3.png'

import { ResponsiveTo } from '@/hooks/useResponsive'
export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 860px;
  padding-top: 100px;
  background: url(${bgImg});
  background-size: 150%;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 330px;
  .experience-text{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 16px;
    width: 234px;
    margin: 0 auto;
  }
  margin-bottom: -180px;
  ${ResponsiveTo('md')}{
    background-size: cover;
    height: 728px;
    background-position-y: 0px;
    .experience-text{
      width: 100%;
    }
    margin-bottom: -80px;
  }
  ${ResponsiveTo('lg')}{
    height: 952px;
    background-size: cover;
    margin-bottom: -180px;
  }
  ${ResponsiveTo('xl')}{
    height: 1191px;
    background-size: cover
    ;
    background-position-y: 0;
  }
`

export const Grid = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  margin-top: 58px;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  article:nth-child(1){
    background-image: url(${img1});
    &:hover{
      background-image: url(${hover1});
      background-position-y: center;
    }
  }
  article:nth-child(2){
    background-image: url(${img2});
    &:hover{
      background-image: url(${hover2});
      background-position-y: center;
    }
  }
  article:nth-child(3){
    background-image: url(${img3});
    &:hover{
      background-image: url(${hover3});
      background-position-y: center;
    }
  }
  article{
    background-repeat: no-repeat; 
    background-size: cover;
    background-position-x: center;
    background-position-y: -40px;
    transition: all 0.3s;
  }
  
  
  ${ResponsiveTo('md')}{
    display: grid; 
    place-items: center;
    max-width: 1610px;
    gap: 28px;
    article{
      background-position-y: center;
    }
  }
  ${ResponsiveTo('lg')}{
    max-width: 868px;
    gap: 40px;
  }
  ${ResponsiveTo('xl')}{
    gap: 48px;
    max-width: 1109px;
  }
`

export const Article = styled.article`
  position: relative;
  width: 234px;
  height: 133px;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.95));
  
  ${ResponsiveTo('md')}{
    width: 186px;
    height: 311px;
  }
  ${ResponsiveTo('lg')}{
    width: 264px;
    height: 443px;
  }
  ${ResponsiveTo('xl')}{
    width: 337.76px;
    height: 567px; 
  }
`
