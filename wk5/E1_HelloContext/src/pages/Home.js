import { useContext } from "react"; 
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
// import products from "../json/products.json";
import { StoreContext } from "../App"
const { Header, Content, Footer } = Layout;

function Home() {
  const { products } = useContext(StoreContext);
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title="NORDIC NEST Shopping Cart"/>
      </Header>
      <Content className="layout-content">
        <ProductList products={products}/>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Home;
