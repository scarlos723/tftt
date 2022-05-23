import React from 'react'
import imgRichard from '../../assets/images/producer/richard.png'
import { Text } from '../TerryStone/styles'
import { ContainerRichard } from './styles'
export default function Richard () {
  return (
    <ContainerRichard>
      <img src={imgRichard} alt="richard image" />
      <Text>
        <h3><span>richard</span></h3>
        <p>
        Richard has worked in the Film Industry since 1982
        and has produced, executive produced and controlled
        the finances for more than 60 productions often from
        initial development to final delivery. He is a completion
        guarantor-recognised producer and financial controller.&#34;
        </p>
        <p>
          &#34;Richard and Terry have been working together as Producing
          Partners for the past decade and have created, developed,directed
          and produced a slate of films, documentaries & Television Series,
          some of which have had wide cinema releases and Worldwide releases on
          Netflix and Amazon.
        </p>
      </Text>
    </ContainerRichard>
  )
}
