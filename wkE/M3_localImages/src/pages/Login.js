import { Layout } from "antd";
import * as QueryString from "query-string";

import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import LoginCard from "../components/LoginCard";

const { Header, Content, Footer } = Layout;

function Login(props) {
  const { redirect } = QueryString.parse(props.location.search);
  return (
    <Layout className="container main-layout">
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
