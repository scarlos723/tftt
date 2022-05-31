import styled from 'styled-components'
import bgImg from '../../assets/images/popup/bgPopup.png'
import closeIcon from '../../assets/icons/closeIconPopup.svg'
import { ResponsiveTo } from '../../hooks/useResponsive'
import gorillas from '../../assets/images/popup/gorillas.png'


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 12;
  background: #000000a1;
`
export const Section = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:url(${bgImg}), #000000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  position: relative;
  padding: 40px 20px;
  border-radius: 20px;
  button{
    width: 100%;
    max-width: 240px;
  }
  .close-btn{
    position: absolute;
    right: 10px;
    top: 10px;
    width: 25px;
    height: 22px;
    cursor: pointer;
    background-image: url(${closeIcon});
    background-repeat: no-repeat;
    background-size: contain;
  }

  ${ResponsiveTo('md')}{
    max-width: 550px;
    padding: 80px 40px;
    button{
      max-width: 428px;
    }
  }
  ${ResponsiveTo('lg')}{
    max-width: 848px;
    height: 545px;
    padding: 38px 100px 62px 100px;
    button{
      max-width: 476px;;
    }
  }
  ${ResponsiveTo('xl')}{
    button{
      max-width: 631px;
    }
  }
`
export const Text = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  margin-bottom: 50px;
  gap: 22px;
`
export const Image = styled.img.attrs({
  src: gorillas,
  role: 'presentation',
  alt: 'Gorillas NFTs Collection'
})`
  margin-bottom: -0.4rem;
  z-index: 0;
  width: 200px;
  height: auto;
  ${ResponsiveTo('md')}{
    width: 420px;
    margin-bottom: -0.85rem;
  }
  ${ResponsiveTo('lg')}{
    width: 476px;
  }
`
