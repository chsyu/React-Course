import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import tableware from "../json/tableware.json"

const { Header, Content, Footer } = Layout;

function Tableware() {
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title="Tableware" />
      </Header>
      <Content className="layout-content">
        <ProductList products={tableware} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Tableware;
