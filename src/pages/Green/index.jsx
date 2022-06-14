import React, { useEffect } from 'react'
import bgBanner from '../../assets/images/greenLanding/banner.png'
import gorillaImg from '../../assets/images/greenLanding/gorilla.png'
import bgImgFooter from '../../assets/images/greenLanding/footer.png'
import GorillasLanding from '../../components/GorillasLanding'

export default function Green () {
  const dataInfo = {
    isGeneral: false,
    halloColor: '#3FC542',
    nameGorilla: 'green',
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
      redText: '2x vip',
      whiteText: '“all expences paid”',
      parragraph: 'Day passes to the TFTT movie Production set, reserved seating to watch the team in action, meet the director and cast. And the ticket for the day passes art.',
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
