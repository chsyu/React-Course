'use client'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RegisterCard from "../../components/RegisterCard";

function Register() {

  return (
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
  );
}

export default Register;
