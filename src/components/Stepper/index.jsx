import { Container, Step } from './styles'

function Stepper() {
  return (
    <Container>
      <Step />
      <Step variant='next' />
    </Container>
  )
}

export default Stepper
