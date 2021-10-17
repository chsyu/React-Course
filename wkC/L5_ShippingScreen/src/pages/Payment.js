import { Layout } from "antd";
import ShippingHeader from "../components/ShippingHeader";
import AppFooter from "../components/Footer";
const { Header, Content, Footer } = Layout;

function Payment() {
  return (
    <Layout className="container main-layout">
      <Layout className="bg-gray main-area">
        <Header className="layout-header">
          <ShippingHeader title="Payment Method Page" step1 step2 step3 />
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

export default Payment;