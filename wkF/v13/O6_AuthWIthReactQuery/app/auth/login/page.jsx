'use client'
import { Provider } from "react-redux";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import store from '../../redux/store';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoginCard from "../../components/LoginCard";

const queryClient = new QueryClient()

function Login() {

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="container main-layout">
          <header className="layout-header">
            <Header title="Login Page" />
          </header>
          <section className="layout-content">
            <LoginCard />
          </section>
          <footer className="layout-footer">
            <Footer />
          </footer>
        </div>
      </Provider>
    </QueryClientProvider>
  );
}

export default Login;
