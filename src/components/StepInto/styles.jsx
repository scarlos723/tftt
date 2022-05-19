import styled from 'styled-components'
import bgImg from '@/images/home/bgStepInto.png'
import img1 from '../../assets/images/home/stepImg1.jpg'
import img2 from '../../assets/images/home/stepImg2.jpg'
import img3 from '../../assets/images/home/stepImg3.jpg'

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 1191px;
  padding-top: 100px;
  background: url(${bgImg});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: top;
  .experience-text{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`

export const Grid = styled.div`
  display: grid; 
  width: 90%;
  max-width: 1109px;
  margin: 0 auto;
  margin-top: 58px;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  article:nth-child(1){
    background-image: url(${img1});
    background-repeat: no-repeat;
    background-size: cover;
  }
  article:nth-child(2){
    background-image: url(${img2});
    background-repeat: no-repeat;
    background-size: cover;
  }
  article:nth-child(3){
    background-image: url(${img3});
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export const Article = styled.article`
  width: 337.76px;
  height: 567px; 
  position: relative;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.95));
  .img1, .img2, .img3{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    object-fit: contain;
  }
  .hover{
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    background-color: #5d000098;
    transition: all 0.3s
  }
  &:hover{
    .hover{
      opacity: 1;
    }
  }
`
