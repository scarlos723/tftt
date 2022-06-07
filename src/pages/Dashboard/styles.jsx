import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const Background = styled.div`

  display: grid;
  min-height: 100vh;
`
export const Container = styled.div`
  display: grid;
  max-width: 1010px;
  margin: 0 auto;
  place-content: center;
  place-items: center;
`

export const FormSesion = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  width: 400px;
  height: 300px;
  margin: 0 auto;
  border: 1px solid #fff;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 2px #19592a;
`
export const InputContaier = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  label{
    text-align: left;
    font-size: 1.2rem;
  }
  input{
    border-radius: 8px;
    padding: 0 12px;
    height: 32px;
  }
`
export const Table = styled.table`
  
  tr,th,td{
    color: white;
  }
  th{
    text-align: left;
  }
  th,td{
    border-bottom: 1px solid white;
  }
`
export const TableContainer = styled.div`
  margin: 100px auto;
  display: flex;
  width: 90%;
  overflow-x: scroll;
  ${ResponsiveTo('md')}{
    overflow: hidden;
    
  }
  ${ResponsiveTo('lg')}{
    width: auto;
  }

`
export const ButtobExportContainer = styled.div`
  display: grid;
  place-content: center;
  margin-top: 100px;
  margin-bottom: 40px;
  a{
    display: flex;
    justify-content: center;
    width: 150px;
    border-radius: 12px;
    background: transparent;
    border: 1px solid white;
    text-decoration: none;
    color: white;
  }
`
