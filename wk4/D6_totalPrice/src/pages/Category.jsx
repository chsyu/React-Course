import { useParams } from 'react-router';
import { Helmet } from "react-helmet-async"
import _ from 'lodash';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";

function Category() {
  const { categoryName } = useParams();
  const _products = products.filter(
        x => x?.category.toUpperCase() === categoryName.toUpperCase()
      );
    
  const title = _.startCase(categoryName);

  return (
    <div className="container mx-auto main-layout bg-gray-900 min-h-screen">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header 
        title={title}
        slogan="The best place to buy your favorite products"
      />
      <ProductList products={_products} className="content" />
      <Footer className="footer" />
    </div>
  );
}

export default Category;
