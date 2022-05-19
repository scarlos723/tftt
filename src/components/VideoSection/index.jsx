import React from 'react'
import { Section } from './styles'

export default function VideoSection () {
  return (
    <div>
      <Section>
        <iframe width='560' height='315' src='https://www.youtube.com/embed/Rnu6IRIQNdQ' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
      </Section>
    </div>
  )
}
