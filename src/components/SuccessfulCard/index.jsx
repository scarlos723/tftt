import { Button, CartIcon, CheckIcon, Container, Paragraph, Title } from './styles'

function SuccessfulCard () {
  return (
    <Container>
      <CheckIcon />
      <Title>
        welcome to the trap
      </Title>
      <Paragraph>
        You are all set to <span>step into the trap</span>, we will keep you posted.
      </Paragraph>
      <CartIcon />
      <Button to='/marketplace'>
        Go back to our Marketplace
      </Button>
    </Container>
  )
}

export default SuccessfulCard
