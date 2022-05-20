import React from 'react'
import {
  Article,
  CardsContainer,
  Container,
  RowButton,
  Section
} from './styles'

export default function TopDrops () {
  return (
    <Container>
      <h3>
        Top drops
      </h3>
      <Section>
        <RowButton> &lt; </RowButton>
        <CardsContainer>
          <Article />
          <Article />
          <Article />
        </CardsContainer>
        <RowButton> &gt; </RowButton>
      </Section>

    </Container>
  )
}
