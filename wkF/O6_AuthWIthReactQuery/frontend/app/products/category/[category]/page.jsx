
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import ProductList from "../../../components/ProductList";
import { getCategoryProducts } from '../../../api';


async function Home({params}) {
  const { category } = params;
  const data = await getCategoryProducts(category);
  const products = data || [];
  const title = category.toUpperCase();

  return (
    <div className="container main-layout">
      <header className="layout-header">
        <Header title={title} />
      </header>
      <section className="layout-content">
        <ProductList products={products} />
      </section>
      <footer className="layout-footer">
        <Footer />
      </footer>
    </div>  
  );
}

export default Home;
