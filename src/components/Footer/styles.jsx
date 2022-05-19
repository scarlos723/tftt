import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 596px;
`
export const Contain = styled.section`
  display: flex;
  flex-flow: column nowrap;
  
  height: 100%;
  justify-content: center;
  align-items: center;
  max-width: 706px;
  margin: 0 auto;
  div{
    display: grid;
    place-items: center;
  }
  p{
    font-family: 'cooper hewitt light';
    
    color: white;
  }
  h1{
  
    font-size: 144px;
    line-height: 85%;
    letter-spacing: -0.02rem;
    margin: 0;
        color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: rgba(241, 5, 5, 1);
  }
`
