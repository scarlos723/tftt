import React, { useEffect } from 'react'
import bgBanner from '../../assets/images/greenLanding/banner.png'
import gorillaImg from '../../assets/images/greenLanding/gorilla.png'
import bgImgFooter from '../../assets/images/greenLanding/footer.png'
import GorillasLanding from '../../components/GorillasLanding'

export default function Green () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const dataInfo = {
    isGeneral: false,
    halloColor: '#3FC542',
    nameGorilla: 'Green',
    subtitle: 'The Herbal Supplier',
    description: ' ',
    about: 'Marijuana smoking troop leader, he’s always intoxicated and keeps a close eye on his crew, he’s hypercritical and will diss everything they do…….he needs to be noticed, he calls the shots and his troop know that.',
    posChars: [
      'He is ambitious.',
      'He is constantly long-term planning.',
      'He has a great sense of responsibility.',
      'He is adventurous and wants to explore.'
    ],
    negChars: [
      'He can be very stubborn. ',
      'He is materialistic and desires social status.',
      'He is greedy and envious.',
      'He’s judgemental and critical.'
    ],
    relSigns: ['taurus', 'virgo', 'capricorn'],
    gridText: {
      redText: 'Meet the directors ',
      whiteText: 'on a Zoom Call',
      parragraph: 'A Zoom Call with the Directors of the Movie, get to ask direct questions and talk to the directors one on one.',
      quantity: 100
    },
    images: {
      banner: bgBanner,
      gorilla: gorillaImg,
      footer: bgImgFooter
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <GorillasLanding dataInfo={dataInfo} />
  )
}
