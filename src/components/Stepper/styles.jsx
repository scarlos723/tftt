import styled, { css } from "styled-components";
import { ResponsiveTo } from '@/hooks/useResponsive'


export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 110px;
  margin: 2.25rem auto 0;
  ${ResponsiveTo('md')} {
    max-width: 122px;
    margin-top: 3.5rem;
  }
  ${ResponsiveTo('xl')} {
    margin-top: 4.625rem;
  }
`

export const Step = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  ${props => props.variant === 'next'
    ? css`
      border: 1px solid rgba(255, 255, 255, 0.5);
      background: rgba(0, 0, 0, 0.7);
    `
    : css`background-color: #F10505;`
  }
  &:not(:last-child)::after {
    content: '';
    display: block;
    width: 2.375rem;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.5);
    transform: translate(95%, 14px);
  }
  ${ResponsiveTo('768px')} {
    width: 2rem;
    height: 2rem;
    &:not(:last-child)::after {
      width: 2.625rem;
      transform: translate(95%, 1rem);
    }
  }
`
