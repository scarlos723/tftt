import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, TextBox } from './styles'

export default function OurWhiteList () {
  const navigate = useNavigate()
  return (
    <Container>

      <TextBox>
        <h1 className='style-border-white'>
        our whitelist is open
        </h1>
        <h3><span>Our first NFT drop is coming...</span></h3>
        <button className="custom-btn" onClick={() => navigate('/register')}>register now</button>
      </TextBox>
    </Container>
  )
}
