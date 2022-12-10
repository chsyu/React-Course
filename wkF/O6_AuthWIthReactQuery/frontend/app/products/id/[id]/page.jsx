import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import ProductDetail from "../../../components/ProductDetail";
import { getProductById } from '../../../api';


async function Home({params}) {
  const { id } = params;
  const data = await getProductById(id);
  const product = data || {};

  return (
    <div className="container main-layout">
      <header className="layout-header">
        <Header title="Product Detail" />
      </header>
      <section className="layout-content">
        <ProductDetail product={product} />      
      </section>
      <footer className="layout-footer">
        <Footer />
      </footer>
    </div>  
  );
}

export default Home;
