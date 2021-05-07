import { Layout } from "antd";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";

const { Header, Content, Footer } = Layout;

function Shipping() {
  return (
    <Layout className="container main-layout">
      <Layout className="bg-gray main-area">
        <Header className="layout-header">
          <AppHeader title="Shipping Page" />
        </Header>
        <Content className="layout-content">
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Shipping;
