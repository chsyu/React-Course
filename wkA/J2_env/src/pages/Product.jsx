
import { useParams } from 'react-router';
import { Helmet } from "react-helmet-async"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductDetail from "@/components/ProductDetail";
import products from "@/json/products.json";

function Product() {
   const { productId } = useParams();
   const product = products.find(
      (x) => x.id === productId
   );
   const title = "Product Detail";

   return (
      <div>
         <div className="container mx-auto main-layout">
            <Helmet>
               <title>{title}</title>
            </Helmet>
            <Header
               title={title}
               slogan="An example made by Vite."
            />
            <ProductDetail product={product} className="content" />
         </div>        
         <Footer className="footer" /> 
      </div>

   );
}

export default Product;
