import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import cookware from "../json/cookware.json";

const { Header, Content, Footer } = Layout;

function Cookware() {
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title="Cookware" />
      </Header>
      <Content className="layout-content">
        <ProductList products={cookware}/>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Cookware;
