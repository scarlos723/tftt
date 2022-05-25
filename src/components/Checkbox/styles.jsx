import styled, { css } from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'


const fonts = css`
  font-family: 'steinbeckregular';
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  ${ResponsiveTo('xl')} {
    font-size: 14px;
  }
`

export const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 1.5rem;
  cursor: pointer;
  color: white;
  margin-bottom: 0.75rem;
  ${fonts}
  & > input:checked ~ span {
    background-color: #F10505;
    border: none;
    padding: 0.25rem;
  }
  & > input:checked ~ span:after {
    display: block;
  }
  & > span::after{
    left: 5px;
    bottom: 3px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`

export const FormCheckbox = styled.input.attrs({ type: 'checkbox' })`
  visibility: hidden;
`

export const TextContainer = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1rem;
  width: 1rem;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 3px;
  vertical-align: middle;
  ::after {
    content: "";
    position: absolute;
    display: none;
  }
`

export const ErrorMessage = styled.p.attrs({ role: 'alert' })`
  ${fonts}
  color: #F10505;
  margin-top: -0.25rem;
  margin-bottom: 0.75rem;
`
