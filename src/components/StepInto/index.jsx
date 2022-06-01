import React from 'react'

import { Article, Container, Grid } from './styles'
export default function StepInto () {
  return (
    <Container>
      <div>
        <h3><span>Step into the</span> trap</h3>
        <Grid>
          <Article />
          <Article />
          <Article />
        </Grid>
      </div>
    </Container>
  )
}
