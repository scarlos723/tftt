import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'
import cardBg from '@/images/success/background.png'
import checkIcon from '@/icons/success/check.svg'
import cartIcon from '@/icons/success/cart.svg'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background-image: url(${cardBg});
  background-repeat: no-repeat;
  background-position: center top;
  width: 85%;
  margin: 4rem auto 6rem;
  border-radius: 15px;
  border: 1px solid white;
  padding: 5rem 0.75rem 3.5rem;
  max-width: 540px;
  ${ResponsiveTo('md')} {
    padding: 7.5rem 0 5rem;
    margin: 5rem auto 9rem;
  }
  ${ResponsiveTo('lg')} {
    max-width: 790px;
    margin: 6.5rem auto 9rem;
  }
  ${ResponsiveTo('xl')} {
    max-width: 850px;
    margin: -7rem auto 6rem;
  }
`

export const CheckIcon = styled.img.attrs({
  src: checkIcon,
  alt: 'check icon',
  role: 'presentation'
})`
  width: 5rem;
  height: 5rem;
  display: block;
  margin: 0 auto;
`

export const Title = styled.h2`
  font-size: 15px;
  line-height: 19px;
  color: #F10505;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  ${ResponsiveTo('md')} {
    font-size: 20px;
    line-height: 26px;
    margin-top: 4rem;
  }
`

export const Paragraph = styled.p`
  text-align: center;
  font-weight: 700;
  margin-bottom: 2.25rem;
  span {
    color: white;
    text-transform: uppercase;
  }
  ${ResponsiveTo('md')} {
    font-size: 14px;
    margin-bottom: 2.625rem;
  }
`

export const CartIcon = styled.img.attrs({
  src: cartIcon,
  alt: 'cart icon',
  role: 'presentation'
})`
  width: 28px;
  height: 33px;
  display: block;
  margin: 0 auto;
`

export const Button = styled(Link).attrs({
  className: 'custom-btn'
})`
  display: block;
  font-family: 'steinbeckregular';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  padding: 0.5rem 0.25rem;
  text-decoration: none;
  margin-top: 0.75rem;
  ${ResponsiveTo('md')} {
    width: 245px;
    margin: 0.75rem auto 0;
    border-radius: 4px;
  }
`

