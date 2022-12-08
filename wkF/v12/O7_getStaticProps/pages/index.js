import { useContext, useEffect } from "react";
import { Layout } from 'antd';
import Head from 'next/head'
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import StaticProductList from "../components/StaticProductList";
import { StoreContext } from "../store"

import { getTitle } from "../utils";
import { setPage } from "../actions";
import { getProducts } from "../api";

const { Header, Content, Footer } = Layout;

const Home = ({jsonProducts}) => {
  const { dispatch } = useContext(StoreContext);

  useEffect(() => {
    const url = window.location.pathname;
    setPage(dispatch, url, getTitle(url))
  }, []);// eslint-disable-line react-hooks/exhaustive-deps  

  return (
    <Layout className="container main-layout">
      <Head>
        <title>Home Page</title>
      </Head>
      <Layout className="bg-gray nav-area">
        <NavBar />
      </Layout>
      <Layout className="bg-gray main-area">
        <Header className="layout-header">
          <AppHeader title={"NORDIC NEST Shopping Cart"} />
        </Header>
        <Content className="layout-content">
          <StaticProductList staticProducts={jsonProducts} />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const jsonProducts = await getProducts("/");

  if(jsonProducts){
    console.log('getStaticProps = ')
    console.log(jsonProducts[0])
    return {
      props: {jsonProducts},
    };
  }
}

export default Home;
