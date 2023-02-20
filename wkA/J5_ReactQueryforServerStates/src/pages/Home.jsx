import { useParams } from 'react-router-dom';
import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import { useProducts } from '../react-query';

function Home() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();
  const { categoryName } = useParams();
  const category = !categoryName
    ? "/"
    : products.filter(
      x => x?.category.toUpperCase() === categoryName.toUpperCase()
    );
  const { data, isLoading } = useProducts(category);
  const products = data || [];

  const title = !categoryName
    ? "NORDIC NEST Shopping Cart"
    : products[0]?.category;

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
      <div className="layoutCOntent container">
        <ProductList products={products} />
      </div>
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Home;
