import { useState, useContext } from "react";
import { Layout } from 'antd';
import HamMenu from "../components/HamMenu";
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function Home() {
  const { state: { page: { title, products } } } = useContext(StoreContext);
  const [isOnTouch, setIsOnTouch] = useState(false);
  return (
    <Layout className="container main-layout">
      <Layout className="bg-gray">
        <NavBar isOnTouch={isOnTouch} setIsOnTouch={setIsOnTouch}/>
      </Layout>
      <Layout className="bg-gray">
        <HamMenu
          onClick={() => setIsOnTouch(!isOnTouch)}
          isOnTouch={isOnTouch}
        />
        <Header className="layout-header">
          <AppHeader title={title} />
        </Header>
        <Content className="layout-content">
          <ProductList products={products} />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Home;
