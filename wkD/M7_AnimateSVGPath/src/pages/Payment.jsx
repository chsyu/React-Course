import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import ShippingHeader from '../components/ShippingHeader';
import Footer from "../components/Footer"
import PaymentMethodCard from '../components/PaymentMethodCard';

function Paymeng() {
   const {
      token: { colorBgBase, colorTextBase },
   } = theme.useToken();

   return (
      <div className="mainLayout">
         <Helmet>
            <title>product</title>
            <style>{`
               body { 
                  background-color: ${colorBgBase}; 
                  color: ${colorTextBase}
               }
            `}</style>
         </Helmet>
         <ShippingHeader
            title="Payment Page" step1 step2 step3
            className="layoutHeader"
         />
         <div className="layoutContent container">
            <PaymentMethodCard />
         </div>
         <Footer className="layoutFooter" />
      </div>
   );
}

export default Paymeng;
