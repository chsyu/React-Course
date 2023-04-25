import { Helmet } from "react-helmet-async"
import { theme } from 'antd';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import { useProducts } from '../react-query';

function Home() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();
  const title = "NORDIC NEST Shopping Cart";

  const { data, isLoading } = useProducts();
  const products = data || [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}];

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

export default Home;
