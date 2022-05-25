import { Container, Paragraph, Subtitle, Title } from "./styles"

function BannerRegister({ children, showParagraph=true }) {
  return (
    <Container>
      <Title>
        Register
      </Title>
      <Subtitle>
        Join Our Whitelist
      </Subtitle>
      {showParagraph && (
        <Paragraph>
          Register to be part of the team, in TALES FROM THE
          <strong> TRAP</strong> and stay updated
        </Paragraph>
      )}
      {children}
    </Container>
  )
}

export default BannerRegister
