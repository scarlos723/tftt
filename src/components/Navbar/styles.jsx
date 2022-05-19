import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`
export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 126px 1fr 82px;
  height: 57px;
  width: 90%;
  max-width: 1199px;
  margin: 0 auto;
  margin-top: 52px;
  place-content: center;
  place-items: center;
  a{
    text-decoration: none;
  }
  h4{
    font-family: 'cooper hewitt';
    font-style: normal;
    font-size: 16px;
    line-height: 116.5%;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
  }
`
export const Menu = styled.ul`
  display: flex; 
  flex-direction: row;
  gap: 78px;
  align-items: center;
  list-style: none;
  li{
    a{
      font-family: 'cooper hewitt light';
      font-style: normal;
      font-size: 16px;
      line-height: 116.5%;
      text-transform: uppercase;
      text-decoration: none;
      color: white;
    }
  }

  
  
  
`
