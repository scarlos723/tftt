import styled from 'styled-components'
import bgImg from '../../assets/images/popup/bgPopup.png'
import bgImg2 from '../../assets/images/popup/bgPopup2.png'
import closeIcon from '../../assets/icons/closeIconPopup.svg'
import { ResponsiveTo } from '../../hooks/useResponsive'

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
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:url(${bgImg2}), url(${bgImg}), #000000;
  background-repeat: no-repeat;
  background-size: contain,  cover;
  background-position-x: center;
  background-position-y:bottom, center;
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
    height: 470px;
    padding: 80px 40px;
    button{
      max-width: 428px;
    }
  }
  ${ResponsiveTo('lg')}{
    max-width: 848px;
    height: 669px;
    padding: 93px 72px 62px 72px;
    button{
      max-width: 476px;
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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  h2 {
    // Highlight white text on black background
    font-size: 20px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
  h3 {
    font-size: 12px;
  }
  div{
    display: grid;
    place-items: center;
  }
  ${ResponsiveTo('md')}{
    h2 {
      // Highlight white text on black background
      font-size: 30px;
    }
    h3 {
      font-size: 16px;
    }
  }
  ${ResponsiveTo('lg')}{
    h2 {
      // Highlight white text on black background
      font-size: 50px;
    }
    h3 {
      font-size: 25px;
    }
  }
`
