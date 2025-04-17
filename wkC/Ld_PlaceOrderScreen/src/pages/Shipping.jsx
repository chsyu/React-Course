import { Helmet } from 'react-helmet-async';
import ShippingHeader from '@/components/ShippingHeader'
import ShippingCard from '@/components/ShippingCard'
import Footer from '@/components/Footer'

function Shipping() {
   const title = "Shipping";

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
         />
        <ShippingCard />
      </div>
      <Footer />
    </div>
  )
}

export default Shipping
