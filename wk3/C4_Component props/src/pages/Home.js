import Header from "../components/Header"
import ProductList from "../components/ProducList"
import Footer from "../components/Footer"
function Home() {
  return (
    <div className="bg-color">
        <div className="container">
            <Header 
              title="NORDIC NEST Shopping Cart"
              slogan="An example made by Create-React-App."
            />
            <ProductList />
            <Footer />
        </div>
    </div>
  );
}

export default Home;
