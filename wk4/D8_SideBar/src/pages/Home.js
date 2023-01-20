import { Layout } from "antd";
import { useState } from "react";
import HamMenu from "../components/HamMenu";
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import ProductList from "../components/ProductList";


import products from "../json/products.json";

const { Header, Content, Footer } = Layout;

function Home() {
  const [isOnTouch, setIsOnTouch] = useState(false);
  return (
    <Layout className="container main-layout">
      <NavBar isOnTouch={isOnTouch} />
      <Layout>
        <HamMenu
          onClick={() => setIsOnTouch(!isOnTouch)}
          isOnTouch={isOnTouch}
        />
        <Header className="layout-header">
          <AppHeader title="NORDIC NEST Shopping Cart" />
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
