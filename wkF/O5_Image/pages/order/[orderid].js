import { Layout } from "antd";
import { useRouter } from 'next/router'

import OrderHeader from "../../components/OrderHeader";
import OrderCard from "../../components/OrderCard";
import AppFooter from "../../components/Footer";
const { Header, Content, Footer } = Layout;

function Order({ match }) {
  const router = useRouter()
  const { orderid } = router.query;

   return (
    <Layout className="container main-layout">
      <Layout className="bg-gray main-area">
        <Header className="layout-header">
          <OrderHeader title={`Order: ${orderid}`} />
        </Header>
        <Content className="layout-content">
           <OrderCard orderId={orderid} />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Order;
