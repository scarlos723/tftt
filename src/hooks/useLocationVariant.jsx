import { useLocation } from 'react-router-dom'
import { colorVariants } from '@/utils/colorVariants'

export const useLocationVariant = () => {
  const location = useLocation()
  const pathname = location.pathname

  if (pathname === '/register'
    || pathname === '/success') {
    return colorVariants.secondary
  }
  return colorVariants.primary
}
