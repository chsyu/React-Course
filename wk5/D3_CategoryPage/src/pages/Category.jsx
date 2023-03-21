import { useParams } from 'react-router-dom';
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
    <div className="container mainLayout">
      <Header 
        className="layoutHeader"
        title={title}
        slogan="An example made by Vite."
      />
      <ProductList products={_products} className="layoutContent" />
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Category;
