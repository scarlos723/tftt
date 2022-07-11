import React from 'react'
import { Button, Container, Paragraph, Title } from '../SuccessfulCard/styles'
import wrongIcon from '@/icons/error/wrong.svg'
import { WrongIcon } from '../ErrorCard/styles'
export default function ErrorCardPayment () {
  return (

    <Container>
      <WrongIcon>
        <img src={wrongIcon} alt="" />
      </WrongIcon>
      <Title>
        Oops, something went <span>wrong</span>
      </Title>
      <Paragraph>
        Try again, and check everything is fine!
      </Paragraph>
      <Button to='/payment1'>
        Return to payment form
      </Button>
    </Container>
  )
}
