import Banner from '@/components/BannerRegister'
import Form from '@/components/FormRegister'
import Stepper from '@/components/Stepper'

// TODO: Add SEO component
function Register() {
  return (
    <main>
      <Banner>
        <Stepper />
      </Banner>
      <Form />
    </main>
  )
}

export default Register
