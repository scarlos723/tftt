import styled from 'styled-components'
import bgImg from '../../assets/images/popup/bgPopup.png'
import closeIcon from '../../assets/icons/closeIconPopup.svg'
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
  width: 60%;
  max-width: 848px;
  height: 477px;
  padding: 228px 100px 120px 100px;
  border-radius: 20px;
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
`
export const Text = styled.div`
  display: grid;
  margin-bottom: 50px;
`
