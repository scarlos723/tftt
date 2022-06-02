import { useEffect } from 'react'
import Banner from '@/components/BannerRegister'
import Form from '@/components/FormRegister'
import Stepper from '@/components/Stepper'
import Seo from '@/components/Seo'

function Register () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <main>
      <Seo
        title="Register"
        description='Register to be part of the team, in TALES FROM THE TRAP and stay updated'
      />
      <Banner>
        <Stepper />
      </Banner>
      <Form />
    </main>
  )
}

export default Register
