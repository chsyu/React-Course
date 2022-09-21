import { Layout } from 'antd';
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import { selectProducts } from "../redux/productsSlice";
const { Header, Content, Footer } = Layout;

function Home() {
  let products = useSelector(selectProducts);
  let title = "NORDIC NEST Shopping Cart";
  const { categoryName } = useParams();

  if(!!categoryName) {
    products = products.filter(product => product.category.toUpperCase() == categoryName.toUpperCase());
    if(products.length)
      title = products[0].category.toUpperCase();
  }

  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title={title}/>
      </Header>
      <Content className="layout-content">
        <ProductList products={products}/>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Home;
