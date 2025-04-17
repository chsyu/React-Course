import { Helmet } from 'react-helmet-async';
import ShippingHeader from '@/components/ShippingHeader'
import PaymentMethodCard from '@/components/PaymentMethodCard';
import Footer from '@/components/Footer'

function Payment() {
   const title = "Payment";

  return (
    <div className="main-layout min-h-screen">
      <div className="container mx-auto ">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <ShippingHeader
          title={title}
          step1
          step2
          step3
         />
        <PaymentMethodCard />
      </div>
      <Footer />
    </div>
  )
}

export default Payment
