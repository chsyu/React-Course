import { useParams } from 'react-router-dom';
import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import { useProductById } from '../react-query';
import MotionDiv from '../components/MotionDiv';

function Product() {
   const {
      token: { colorBgBase, colorTextBase },
   } = theme.useToken();
   const { productId } = useParams();
   const { data, isLoading } = useProductById(productId);

   const product = data || {};

   return (
      <MotionDiv className="mainLayout">
         <Helmet>
            <title>product</title>
            <style>{`
               body { 
                  background-color: ${colorBgBase}; 
                  color: ${colorTextBase}
               }
            `}</style>
         </Helmet>
         <Header
            className="layoutHeader"
            title="Product Detail"
            slogan="An example made by Vite."
         />
         <div className="layoutContent container">
            <ProductDetail product={product} isLoading={isLoading} />
         </div>
         <Footer className="layoutFooter" />
      </MotionDiv>
   );
}

export default Product;
