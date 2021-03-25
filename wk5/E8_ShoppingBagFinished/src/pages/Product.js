import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import products from "../json/products.json";

const { Header, Content, Footer } = Layout;

function Product({ match }) {
   const product = products.find(
      x => x.id === match.params.productId
   );
   return (
      <Layout className="container main-layout">
         <Header className="layout-header">
            <AppHeader title="Product Detail" />
         </Header>
         <Content className="layout-content">
            <ProductDetail product={product} />
         </Content>
         <Footer className="layout-footer">
            <AppFooter />
         </Footer>
      </Layout>
   );
}

export default Product;
