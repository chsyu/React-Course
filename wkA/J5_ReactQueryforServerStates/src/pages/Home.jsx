import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header'
import ProductList from '@/components/ProductList'
import Footer from '@/components/Footer'
import { useProducts } from '@/react-query';

function Home() {
  const title = "Welcome to the Store";
  const { data, isLoading } = useProducts();
  const products = data || [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}];

  return (
    <div>
      <div className="container mx-auto main-layout min-h-screen">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Header
          title={title}
          slogan="The best place to buy your favorite products"
        />
        <ProductList products={products} className="content" />
      </div>
      <Footer className="footer" />
    </div>
  )
}

export default Home
