import React, { useEffect } from 'react'
import bgBanner from '../../assets/images/theGeneralLanding/bgImg.png'
import gorillaImg from '../../assets/images/theGeneralLanding/gorillaImg.png'
import bgImgFooter from '../../assets/images/theGeneralLanding/bgImgFooter.png'
import GorillasLanding from '../../components/GorillasLanding'

export default function TheGeneral () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const dataInfo = {
    isGeneral: true,
    halloColor: 'rgba(87, 0, 255, 0.9)',
    nameGorilla: 'The General',
    description: ` The General is the ultimate force, the commander
    of the GrimeGorilla$.  His power spans the universe and beyond.
    He’s spiritual and cultural,
    he’s without question  the most Supreme, the one who reigns
    over all the GrimeGorilla$.`,
    gridText: {
      redText: '2x vip',
      whiteText: '“all expences paid”',
      middleRedText: 'screening',
      parragraph: 'Day passes to the TFTT movie Production set, reserved seating to watch the team in action, meet the director and cast. And the ticket for the day passes art.',
      quantity: 1
    },
    images: {
      banner: bgBanner,
      gorilla: gorillaImg,
      footer: bgImgFooter
    }

  }
  return (
    <div>
      <GorillasLanding dataInfo={dataInfo} />
    </div>
  )
}
