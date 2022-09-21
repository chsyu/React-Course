import { Layout } from 'antd';
import { useSelector } from "react-redux";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import { selectProducts } from "../redux/productsSlice";

const { Header, Content, Footer } = Layout;

function Home() {
  const products = useSelector(selectProducts);

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
