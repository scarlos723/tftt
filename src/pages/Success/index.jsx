import Banner from '@/components/BannerRegister'
import Stepper from '@/components/Stepper'
import Seo from '@/components/Seo'
import SuccessfulCard from '@/components/SuccessfulCard'

function Success() {
  return (
    <main>
      <Seo
        title="Success"
      />
      <Banner showParagraph={false}>
        <Stepper />
      </Banner>
      <SuccessfulCard />
    </main>
  )
}

export default Success
