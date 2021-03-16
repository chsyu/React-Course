import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import textile from "../json/textile.json";

const { Header, Content, Footer } = Layout;

function Textile() {
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title="Textile" />
      </Header>
      <Content className="layout-content">
        <ProductList products={textile} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Textile;
