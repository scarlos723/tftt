import React from 'react'

export const useScrollToSection = () => {
  const goToSection = React.useCallback(
    (section) => {
      const element = document.getElementById(section)
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  , [])
  return goToSection
}
