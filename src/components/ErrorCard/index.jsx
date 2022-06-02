import React from 'react'
import { Button, Container, Paragraph, Title } from '../SuccessfulCard/styles'
import wrongIcon from '@/icons/error/wrong.svg'
import { WrongIcon } from './styles'
export default function ErrorCard () {
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
      <Button to='/register'>
        Return to registration page
      </Button>
    </Container>
  )
}
