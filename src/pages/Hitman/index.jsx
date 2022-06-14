import React from 'react'
import bgBanner from '../../assets/images/hitmanLanding/banner.png'
import gorillaImg from '../../assets/images/hitmanLanding/gorilla.png'
import bgImgFooter from '../../assets/images/hitmanLanding/footer.png'
import GorillasLanding from '../../components/GorillasLanding'

export default function Hitman () {
  const dataInfo = {
    isGeneral: false,
    halloColor: 'rgba(252, 13, 13, 0.9)',
    nameGorilla: 'Hitman',
    subtitle: 'The Hot-Headed Assassin',
    description: '',
    about: `You need to stay on the right side of this GrimeGorilla, 
    he’s a true leader. The Hitman is a worldwide respected gangster 
    who gets his own way and will do what it takes to ensure his 
    leaderships not challenged. He’s extremely 
    persistent and will not stop until the deed is done.`,
    posChars: [
      'He’s outgoing and energetic.',
      'He’s extremely motivated. ',
      'He is curious and not afraid to question things.',
      'He is a leader.'
    ],
    negChars: [
      'He’s impatient and wants things done immediately.',
      'He’s hot headed and can be quick tempered.',
      'He relentless and will do what it takes to get his way.',
      'He’s easily bored and distracted when not the centre of attention.'
    ],
    relSigns: ['aries', 'leo', 'sagittarius'],
    gridText: {
      whiteText1: 'Ticket',
      middleRedText: 'to assist',
      whiteText2: 'the red carpet event',
      parragraph: 'Reserved seating, with premium bar.',
      quantity: 10
    },
    images: {
      banner: bgBanner,
      gorilla: gorillaImg,
      footer: bgImgFooter
    }
  }
  return (
    <GorillasLanding dataInfo={dataInfo} />
  )
}
