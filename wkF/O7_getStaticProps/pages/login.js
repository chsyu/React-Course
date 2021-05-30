import { Layout } from "antd";
import { useRouter } from 'next/router'
import Head from 'next/head'
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import LoginCard from "../components/LoginCard";

const { Header, Content, Footer } = Layout;

function Login(props) {
  const router = useRouter()
  const { redirect } = router.query;
  return (
    <Layout className="container main-layout">
      <Head>
        <title>Login Page</title>
      </Head>      
      <Layout className="bg-gray main-area">
        <Header className="layout-header">
          <AppHeader title="Login Page" />
        </Header>
        <Content className="layout-content">
          <LoginCard redirect={redirect} />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Login;
