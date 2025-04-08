import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header'
import ProductList from '@/components/ProductList'
import Footer from '@/components/Footer'
import products from "@/json/products.json";

function Home() {
  const title = "Welcome to the Store";

  return (
    <div className="main-layout min-h-screen">
      <div className="container mx-auto">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Header
          title={title}
          slogan="The best place to buy your favorite products"
        />
        <ProductList products={products} className="content" />
      </div>
      <Footer />
    </div>
  )
}

export default Home
