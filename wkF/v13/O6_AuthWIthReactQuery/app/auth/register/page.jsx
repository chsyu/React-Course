'use client'
import { Provider } from "react-redux";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import store from '../../redux/store';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RegisterCard from "../../components/RegisterCard";

const queryClient = new QueryClient()

function Register() {

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="container main-layout">
          <header className="layout-header">
            <Header title="Register Page" />
          </header>
          <section className="layout-content">
            <RegisterCard />
          </section>
          <footer className="layout-footer">
            <Footer />
          </footer>
        </div>
      </Provider>
    </QueryClientProvider>
  );
}

export default Register;
