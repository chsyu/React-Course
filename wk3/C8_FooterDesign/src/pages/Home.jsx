import Header from '../components/Header'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer'

function Home() {

  return (
    <div className="container mx-auto main-layout">
      <Header 
        title="Welcome to the Store"
        slogan="The best place to buy your favorite products"
      />
      <ProductList />
      <Footer />
    </div>
  )
}

export default Home
