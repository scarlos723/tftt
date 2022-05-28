import { Container, Subtitle, Title } from "./styles"

function BannerRegister({ children }) {
  return (
    <Container>
      <Title>
        Register
      </Title>
      <Subtitle>
        Join Our Whitelist
      </Subtitle>
      {children}
    </Container>
  )
}

export default BannerRegister
