import virgoIcon from '../assets/icons/virgo.svg'
import ariesIcon from '../assets/icons/aries.svg'
import aquariusIcon from '../assets/icons/aquarius.svg'
import cancerIcon from '../assets/icons/cancer.svg'
import capricornIcon from '../assets/icons/capricorn.svg'
import geminiIcon from '../assets/icons/gemini.svg'
import leoIcon from '../assets/icons/leo.svg'
import libraIcon from '../assets/icons/libra.svg'
import piscesIcon from '../assets/icons/pisces.svg'
import sagittariusIcon from '../assets/icons/sagittarius.svg'
import scorpioIcon from '../assets/icons/scorpio.svg'
import taurusIcon from '../assets/icons/taurus.svg'

export default function useSigns () {
  const signs = {
    virgo: {
      name: 'Virgo',
      icon: virgoIcon
    },

    aries: {
      name: 'Aries',
      icon: ariesIcon
    },

    aquarius: {
      name: 'Acuarius',
      icon: aquariusIcon
    },

    cancer: {
      name: 'Cancer',
      icon: cancerIcon
    },

    capricorn: {
      name: 'Capricorn',
      icon: capricornIcon
    },

    gemini: {
      name: 'Gemini',
      icon: geminiIcon
    },

    leo: {
      name: 'Leo',
      icon: leoIcon
    },

    libra: {
      name: 'Libra',
      icon: libraIcon
    },

    pisces: {
      name: 'Pisces',
      icon: piscesIcon
    },

    sagittarius: {
      name: 'Sagittarius',
      icon: sagittariusIcon
    },

    scorpio: {
      name: 'Scorpio',
      icon: scorpioIcon
    },

    taurus: {
      name: 'Taurus',
      icon: taurusIcon
    }
  }

  return signs
}
