import { useContext, useEffect } from "react";
import { Layout } from 'antd';

import NavBar from "../components/NavBar";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import { StoreContext } from "../store"
import { getTitle } from "../utils";
import { pageContentsSet, activeNavItemSet } from "../actions";
import { getJSON } from "../api";

const { Header, Content, Footer } = Layout;

function Home() {
  const { state: { page: { title, products } }, dispatch } = useContext(StoreContext);

  useEffect(() => {
    const url = window.location.pathname;
    pageContentsSet(dispatch, getTitle(url), getJSON(url));
    activeNavItemSet(dispatch, url);
  }, []);// eslint-disable-line react-hooks/exhaustive-deps    
  return (
    <Layout className="container main-layout">
      <Layout className="bg-gray nav-area">
        <NavBar />
      </Layout>
      <Layout className="bg-gray main-area">
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
