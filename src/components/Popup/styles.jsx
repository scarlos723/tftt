import styled from 'styled-components'
import bgImg from '../../assets/images/popup/bgPopup.png'
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
  }
  ${ResponsiveTo('lg')}{
    max-width: 848px;
    height: 477px;
    padding: 228px 100px 120px 100px;
  }
`
export const Text = styled.div`
  display: grid;
  margin-bottom: 50px;
`
