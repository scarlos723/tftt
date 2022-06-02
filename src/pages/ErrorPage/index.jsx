import { useEffect } from 'react'

import Seo from '@/components/Seo'
import ErrorCard from '@/components/ErrorCard'
import BannerResponse from '../../components/BannerResponse'

export default function ErrorPage () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <main>
      <Seo
        title="Error"
      />
      <BannerResponse />
      <ErrorCard />
    </main>
  )
}
