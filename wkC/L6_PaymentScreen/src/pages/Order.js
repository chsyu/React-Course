import { Layout } from "antd";
import { useContext } from "react";
import OrderHeader from "../components/OrderHeader";
import OrderCard from "../components/OrderCard";
import AppFooter from "../components/Footer";
import { StoreContext } from "../store"
const { Header, Content, Footer } = Layout;

function Order({ match }) {
   const { state: { orderInfo } } = useContext(StoreContext);

   return (
    <Layout className="container main-layout">
      <Layout className="bg-gray main-area">
        <Header className="layout-header">
          <OrderHeader title={`Order: ${match.params.orderId}`} />
        </Header>
        <Content className="layout-content">
           <OrderCard order={orderInfo} />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Order;
