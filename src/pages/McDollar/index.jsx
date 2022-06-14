import React, { useEffect } from 'react'
import bgBanner from '../../assets/images/mcDollarLanding/banner.png'
import gorillaImg from '../../assets/images/mcDollarLanding/gorilla.png'
import bgImgFooter from '../../assets/images/mcDollarLanding/footer.png'
import GorillasLanding from '../../components/GorillasLanding'

export default function McDollar () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const dataInfo = {
    isGeneral: false,
    halloColor: 'rgba(174, 205, 243, 0.9)',
    nameGorilla: 'Mc Dollar',
    subtitle: 'The Lyrical Don',
    description: '',
    about: `Some say he’s a lover not a fighter, the GrimeGorilla$ know different. 
    He’s  from the original Chicago street Drill scene, now 
    living in Brixton London, Mc Dollar$ is a force  to be reckoned with. 
    He’s most happy blasting out Drill lyrics strongly associated 
    with cultural  subject matter 
    and violent and hedonistic criminal lifestyles.`,
    posChars: [
      'He systematically works through all his options.',
      'He’s inventive and informative.',
      'He’s non-judgemental.',
      'He’s knowledgeable, he’s the analyst of the Troop.'
    ],
    negChars: [
      'He hates being alone.',
      'He’s indecisive, cannot make decisions. ',
      'He dislikes conflict and avoids confrontations.',
      'He shows lack of consistency.'
    ],
    relSigns: ['gemini', 'libra', 'aquarius'],
    gridText: {
      whiteText1: 'Digital poster',
      middleRedText: 'signed',
      whiteText2: 'by actors',
      parragraph: 'Digital Poster with a Certificate of Authenticity and number of Certificate.',
      quantity: 289
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
