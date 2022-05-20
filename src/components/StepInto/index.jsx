import React from 'react'

import { Article, Container, Grid } from './styles'
export default function StepInto () {
  return (
    <Container>
      <div>
        <h3><span>Step into the</span> trap</h3>
        <Grid>
          <Article>
            <div className='hover'>
              <h3>
                bE PART OF THE FILM
              </h3>
            </div>
          </Article>
          <Article>
            <div className='hover'>
              <h3>
                Upload your music
              </h3>
            </div>
          </Article>
          <Article>
            <div className='hover'>
              <h3>
                Upload your video
              </h3>
            </div>
          </Article>
        </Grid>
      </div>
      <div className='experience-text'>
        <h2>Experience the <span>trap</span></h2>
        <h3><span>From the inside out</span></h3>
      </div>
    </Container>
  )
}
