import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import homeAccessories from "../json/home-accessories.json";

const { Header, Content, Footer } = Layout;

function HomeAccessories() {
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title="Home Accessories" />
      </Header>
      <Content className="layout-content">
        <ProductList products={homeAccessories} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default HomeAccessories;
