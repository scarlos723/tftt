import React, { useEffect } from 'react'
import bgBanner from '../../assets/images/djGrillLanding/banner.png'
import gorillaImg from '../../assets/images/djGrillLanding/gorilla.png'
import bgImgFooter from '../../assets/images/djGrillLanding/footer.png'
import GorillasLanding from '../../components/GorillasLanding'

export default function DjGrill () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const dataInfo = {
    isGeneral: false,
    halloColor: 'rgba(0, 102, 190, 0.9)',
    nameGorilla: 'dj grill',
    subtitle: 'The MixMaster',
    description: ' ',
    about: `DjGrill$ He’s a club Legend with a cult following, 
    he’s honest as the days long and loves to mix his urban 
    beats in front of his faithful troop. His overjealous 
    imagination can run wild but when he’s spinning his very own ear candy, 
    that’s when he’s on top of his game.`,
    posChars: [
      'He’s compassionated and honest.',
      'He’s a healer and will try to fix things',
      'He is understanding and patient.',
      'He is very imaginative.'
    ],
    negChars: [
      'He doubts a lot of things.',
      'He is jealous and possessive.',
      'He’s sensitive',
      'He is insecure and questions himself from time to time.'
    ],
    relSigns: ['cancer', 'scorpio', 'pisces'],
    gridText: {
      whiteText1: 'private',
      middleRedText: 'screening',
      whiteText2: 'of the movie',
      parragraph: 'Reserved Online Spot for the Movie Premier, and art for the entry ticket.',
      quantity: 100
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
