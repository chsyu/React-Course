import { Layout } from 'antd';
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import Feeder from "../components/Feeder";

const { Header, Content, Footer } = Layout;

function Feed() {
  return (
    <Layout className="container main-layout">
      <Layout className="bg-gray nav-area">
        <NavBar />
      </Layout>
      <Layout className="bg-gray main-area">
        <Header className="layout-header">
          <AppHeader title="Feed JSON Page" />
        </Header>
        <Content className="layout-content">
          <Feeder />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Feed;
