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
  color: white;
  ${fonts}
  ${({ required }) => required && css`
    ::after {
      content: '*';
    }
  `}
`

export const FormInput = styled.input`
  width: 100%;
  color: white;
  background-color: transparent;
  border: 1px solid #FFFFFF;
  border-radius: 6px;
  margin: 0.75rem 0 0;
  padding: 9px 18px;
  ${fonts}
  &:focus,
  &:focus-visible {
    outline: none;
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  ${ResponsiveTo('md')} {
    padding: 1rem 1.75rem 0.5rem 1.75rem;
    border-radius: 10px;
    margin-top: 1.375rem;
  }
  ${ResponsiveTo('xl')} {
    margin-top: 1.5rem;
  }
`

export const ErrorMessage = styled.p.attrs({ role: 'alert' })`
  ${fonts}
  color: #F10505;
  margin-top: 0.25rem;
`
