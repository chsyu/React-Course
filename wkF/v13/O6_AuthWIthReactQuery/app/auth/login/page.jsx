import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoginCard from "../../components/LoginCard";

function Login() {
  return (
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
  );
}

export default Login;
