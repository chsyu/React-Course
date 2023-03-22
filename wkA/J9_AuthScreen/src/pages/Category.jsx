import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import _ from 'lodash';
import { theme } from 'antd';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import { useProductsByCategory } from '../react-query';

function Category() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();
  const { categoryName } = useParams();
  const { data, isLoading } = useProductsByCategory(categoryName);
  const products = data || [{id: 1}, {id: 2}];
  const title = _.startCase(categoryName);

  return (
    <div className="mainLayout">
      <Helmet>
        <title>{title}</title>
        <style>{`
            body { 
              background-color: ${colorBgBase}; 
              color: ${colorTextBase}
            }
        `}</style>
      </Helmet>
      <Header
        className="layoutHeader"
        title={title}
        slogan="An example made by Vite."
      />
      <div className="layoutContent container">
        <ProductList products={products} isLoading={isLoading} />
      </div>      
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Category;
