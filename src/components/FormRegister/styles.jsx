import styled from 'styled-components';
import { Link } from 'react-router-dom'
import formBg from '@/images/register/form.png'
import { ResponsiveTo } from '@/hooks/useResponsive'


export const Container = styled.div`
  padding: 3rem 2.5rem 5rem;
  background-image: url(${formBg});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center bottom;
  ${ResponsiveTo('md')} {
    padding: 4rem 5rem 14rem;
    margin-bottom: -7rem;
  }
  ${ResponsiveTo('lg')} {
    padding: 4.5rem 6rem 18rem;
    margin-bottom: -12rem;
  }
  ${ResponsiveTo('xl')} {
    padding: 5rem 13.5rem 24rem;
    max-width: 1300px;
    margin: -14rem auto -20rem;
  }
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 0.75rem;
  input[type="tel"]{
    margin-bottom: 0;
  }
  ${ResponsiveTo('md')} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem 1rem;
    & > div:nth-child(n+3),
    button {
      grid-column: 1 / -1;
    }
  }
  ${ResponsiveTo('xl')} {
    grid-column-gap: 1.25rem;
  }
`

export const TermsLink = styled(Link)`
  color: #0E8C0D;
  text-decoration: none;
  &:hover, &:focus, &:active, &:visited {
    color: #0E8C0D;
  }
`

export const CheckboxContainer = styled.div`
  margin-top: 2.25rem;
  margin-bottom: 2.625rem;
  ${ResponsiveTo('lg')} {
    margin-bottom: -1rem;
  }
`

export const Button = styled.button.attrs({className: 'custom-btn'})`
  width: 100%;
  border-radius: 6px;
  padding: 10px 0;
  ${ResponsiveTo('md')} {
    border-radius: 10px;
    font-size: 20px;
    line-height: 140%;
  }
`