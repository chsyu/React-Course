import { Layout } from "antd";
import ShippingHeader from "../components/ShippingHeader";
import PlaceOrderCard from "../components/PlaceOrderCard";
import AppFooter from "../components/Footer";
const { Header, Content, Footer } = Layout;

function PlaceOrder() {
  return (
    <Layout className="container main-layout">
      <Layout className="bg-gray main-area">
        <Header className="layout-header">
          <ShippingHeader title="Place Order Page" step1 step2 step3 step4 />
        </Header>
        <Content className="layout-content">
           <PlaceOrderCard />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default PlaceOrder;
