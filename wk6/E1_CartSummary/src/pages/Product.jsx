import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import products from "../json/products.json";

function Product() {
   const { productId } = useParams();
   const product = products.find(
      (x) => x.id === productId
   );

   return (
      <div className="mainLayout">
         <Helmet>
            <title>product</title>
         </Helmet>
         <Header
            className="layoutHeader"
            title="Product Detail"
            slogan="An example made by Vite."
         />
         <div className="layoutContent container">
            <ProductDetail product={product} />
         </div>
         <Footer className="layoutFooter" />
      </div>
   );
}

export default Product;
