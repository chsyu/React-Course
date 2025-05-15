import { Helmet } from 'react-helmet-async';
import OrderHeader from '@/components/OrderHeader'
import OrderCard from '@/components/OrderCard';
import Footer from '@/components/Footer'
import { useSelector } from 'react-redux';
import { selectOrderData } from '@/redux/cartSlice';


function Order() {
  const orderData = useSelector(selectOrderData);
  console.log('orderData', orderData, orderData.orderId);
  const { orderId } = orderData;
  const title = `Order: ${orderId}`;

  return (
    <div className="main-layout min-h-screen">
      <div className="container mx-auto ">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <OrderHeader
          title={title}
        />
        <OrderCard orderData={orderData} />
      </div>
      <Footer />
    </div>
  )
}

export default Order
