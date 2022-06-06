import styled from 'styled-components'

export const Background = styled.div`

  display: grid;
  height: 100vh;
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
  border: white 1px solid;
  tr,th,td{
    color: white;
  }
`
