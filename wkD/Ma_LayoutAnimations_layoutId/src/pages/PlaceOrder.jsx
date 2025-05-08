import { Helmet } from 'react-helmet-async';
import ShippingHeader from '@/components/ShippingHeader'
import PlaceOrderCard from '@/components/PlaceOrderCard';
import Footer from '@/components/Footer'

function PlaceOrder() {
   const title = "PlaceOrder";

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
          step4
         />
        <PlaceOrderCard />
      </div>
      <Footer />
    </div>
  )
}

export default PlaceOrder
