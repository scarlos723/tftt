import React from 'react'
import {
  Article,
  CardsContainer,
  Container,
  // RowButton,
  Section
} from './styles'
import movie1 from '@/images/marketplace/movie1.png'
import movie2 from '@/images/marketplace/movie2.png'
import movie3 from '@/images/marketplace/movie3.png'
export default function TopDrops () {
  return (
    <Container>
      <h3>
        Top drops
      </h3>
      <Section>
        <div />
        {/* <RowButton> &lt; </RowButton> */}
        <CardsContainer>
          <Article ><img src={movie1} alt="movie1" /></Article>
          <Article ><img src={movie2} alt="movie1" /></Article>
          <Article ><img src={movie3} alt="movie1" /></Article>
        </CardsContainer>
        <div />
        {/* <RowButton> &gt; </RowButton> */}
      </Section>

    </Container>
  )
}
