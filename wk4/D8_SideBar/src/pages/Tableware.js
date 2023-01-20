import { Layout } from 'antd';
import { useState } from "react";
import HamMenu from "../components/HamMenu";
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import tableware from "../json/tableware.json"

const { Header, Content, Footer } = Layout;

function Tableware() {
  const [isOnTouch, setIsOnTouch] = useState(false);
  return (
    <Layout className="container main-layout">
      <NavBar isOnTouch={isOnTouch} />
      <Layout>
        <HamMenu
          onClick={() => setIsOnTouch(!isOnTouch)}
          isOnTouch={isOnTouch}
        />      <Header className="layout-header">
          <AppHeader title="Tableware" />
        </Header>
        <Content className="layout-content">
          <ProductList products={tableware} />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Tableware;
