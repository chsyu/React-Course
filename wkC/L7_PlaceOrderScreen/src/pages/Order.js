import { Layout } from "antd";
import OrderHeader from "../components/OrderHeader";
import OrderCard from "../components/OrderCard";
import AppFooter from "../components/Footer";
const { Header, Content, Footer } = Layout;

function Order() {
  return (
    <Layout className="container main-layout">
      <Layout className="bg-gray main-area">
        <Header className="layout-header">
          <OrderHeader title="Order Page" />
        </Header>
        <Content className="layout-content">
           <OrderCard />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Order;
