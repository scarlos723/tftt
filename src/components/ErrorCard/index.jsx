import React from 'react'
import { Button, CartIcon, CheckIcon, Container, Paragraph, Title } from '../SuccessfulCard/styles'

export default function ErrorCard () {
  return (

    <Container>
      <CheckIcon />
      <Title>
        Oops, something went <span>wrong</span>
      </Title>
      <Paragraph>
        Try again, and check everything is fine!
      </Paragraph>
      <CartIcon />
      <Button to='/register'>
        Return to registration page
      </Button>
    </Container>
  )
}
