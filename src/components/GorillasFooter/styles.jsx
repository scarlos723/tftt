import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Footer = styled.footer`
  border-top: 1px solid white;
  padding: 1.5rem 2rem;
  ul {
    width: 100%;
  }
  p {
    margin: 1.5rem 0 0.75rem;
    text-align: center;
  }
  ${ResponsiveTo('md')} {
    ul {
      display: flex;
      justify-content: space-between;
      max-width: 420px;
    }
    & > div:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
  ${ResponsiveTo('xl')} {
    padding: 2.375rem 3rem;
    ul {
      max-width: 770px;
    }
  }
`

export const GrimeHome = styled(Link)`
  font-family: 'Cooper Hewitt', sans-serif;
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  padding: 1rem;
  border: 1px solid white;
  margin: 0 auto 2rem;
  ${ResponsiveTo('md')} {
    margin: 0;
    font-size: 30px;
  }
  ${ResponsiveTo('xl')} {
    font-size: 2.25rem;
  }
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${ResponsiveTo('md')}{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  ${ResponsiveTo('xl')} {
    max-width: 1184px;
    margin: 0 auto;
  }
`

export const PageLink = styled(Link)`
  display: block;
  color: #fff;
  font-family: 'steinbeckregular';
  font-size: 0.75rem;
  text-decoration: none;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0.5rem 0;
  ${ResponsiveTo('xl')} {
    font-size: 1rem;
  }
`
