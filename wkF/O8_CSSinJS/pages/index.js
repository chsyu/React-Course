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

      <style jsx global>{`



        html,
        body {
          font-size: 16px;
          line-height: 1.6;
          background-color: #111828;
          color: white;
        }

        * {
          box-sizing: border-box;
        }
        .container {
          width: 100%;
          display: flex;
          align-self: center;
          margin: auto;
          background-color: #111828;
        }

        @media (min-width: 576px) {
          .container {
            width: 540px;
          }
        }

        @media (min-width: 768px) {
          .container {
            width: 720px;
          }
        }

        @media (min-width: 992px) {
          .container {
            width: 960px;
          }
        }

        @media (min-width: 1200px) {
          .container {
            width: 1140px;
          }
        }

        @media (min-width: 1600px) {
          .container {
            width: 1500px;
          }
        }

        .container-fluid {
          margin: 0 auto;
          max-width: 1200px;
          padding: 0 15px;
        }
        
        .row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
        }
        
        .primary-google-btn {
          margin-top: 1rem;
        }
        
        .primary-btn {
          margin-top: 1rem;
          border-color: #6366F2;
          background-color: #6366F2;
        }
        
        .primary-btn:hover {
          border-color: #8183ff;
          background-color: #8183ff;
        }
        
        
        .layout-header,
        .layout-footer {
          padding: 0;
          height: auto;
          line-height: 1.6;
          background-color: #111828;
        }
        
        .layout-content {
          background-color: #111828;
        }
        
        .main-layout {
          display: flex;
          flex-direction: row;
          min-height: 100vh;
        }
        
        .nav-area {
          max-width: 30%;
        }
        
        .main-area {
          min-width: 70%;
        }
        @media (max-width: 992px) {
          .main-area {
            width: 100%;
          }
        }
        
        .bg-gray {
          background-color: #111828;
        }
        
        .text-gray {
          color: white;
          opacity: 0.6;
        }
        .header {
          text-align: center;
        }
        
        .header-wrap {
          padding-top: 2rem;
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        
        .header-text {
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        
        .header-title {
          color: white;
          position: relative;
          font-size: 1.6rem;
          padding: 0;
          cursor: pointer;
          z-index: 99;
        }
        
        .header-slogan {
          color: white;
          opacity: 0.6;
          padding: 0;
          margin: 0;
          line-height: 0.8;
          cursor: pointer;
        }
        
        .header-left {
          position: absolute;
          z-index: 9;
          left: 0;
          top: 0;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        
        .header-cart-summary {
          margin-top: 3rem;
          text-align: center;
          cursor: pointer;
        }
        
        @media (max-width: 1600px) {
        
          .header-title {
            width: 14rem;
            font-size: 1.3rem;
          }
        
          .header-slogan {
            display: none;
          }
        
          .header-cart-summary {
            margin-right: 1rem;
            margin-top: 1rem;
            font-size: 0.8rem;
          }
        
        }
        
        @media (max-width: 992px) {
          .header-title {
            font-size: 1.3rem;
          }
        }
        
        @media (max-width: 576px) {
          .header-cart-summary {
            margin-right: 0.7rem;
          }
        
          .header-title {
            width: 10rem;
          }
        }
        .cart-summary-text {
          color: white;
          font-size: 0.7rem;
          opacity: 0.6;
          margin-top: -4px;
        }
        
        .ant-modal-title {
          font-weight: lighter;
          font-size: 1.7rem;
        }
        
        .ant-modal-body {
          font-size: 1rem;
        }
        
        .cart-modal-btn {
          width: 100%;
          font-size: 1.1rem;
          font-weight: lighter;
          padding: 0.7rem;
          height: auto;
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .cart-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        
          padding-bottom: 1rem;
          margin-bottom: 1rem;
          border-bottom: .1rem #c0c0c0 solid;
        }
        
        .cart-image img {
          max-width: 4rem;
          max-height: 4rem;
          flex: 1 1;
        }
        
        .cart-item-content {
          margin-left: 2rem;
          flex: 8 1;
        }
        
        .cart-price {
          font-size: 1rem;
          font-weight: bold;
          text-align: right;
        }
        
        .cart-item-delete {
          font-size: 1.2rem;
          opacity: 0.6;
          text-align: right;
          cursor: pointer;
        }
        
        .cart-total-price-wrap {
          display: flex;
          justify-content: space-between;
        }
        
        .cart-total-price {
          font-weight: bold;
          text-align: right;
        }
        
        @media (max-width: 992px) {
          .cart-summary-text {
            display: none;
          }
        }
        
        .nav-bar {
          background-color: #111828;
          display: flex;
          width: 20rem;
          flex-direction: column;
          padding: 2rem;
          padding-top: 4rem;
          min-height: 100vh;
          transition: all 0.25s linear;
        }
        
        .nav-item {
          font-size: 1.4rem;
          margin-top: 2rem;
          cursor: pointer;
          color: white;
          opacity: 0.6;
          transition: opacity .25s linear;
        }
        
        .nav-item:hover {
          color: white;
          opacity: 1;
        }
        
        .nav-item--active {
          opacity: 1;
        }
        
        .ant-drawer-header {
          border-bottom: none;
        }
        
        .ant-drawer-title {
          text-align: center;
        }
        
        @media (max-width: 992px) {
        
          .nav-area {
            width: 0%;
          }
        
          .collapse-mobile {
            transform: translateX(-100%);
          }
        
          .nav-bar {
            background-color: #111828;
            position: absolute;
            z-index: 99;
            width: 80%;
            flex-wrap: wrap;
          }
        
          .nav-item {
            margin: 2rem auto;
            width: 80%;
          }
        
          .collapse-mobile-wrap {
            display: none;
          }
        
          .nav-bar-wrap {
            background-color: #000;
            opacity: 0.6;
            width: 100vw;
            height: 100vh;
            position: absolute;
            z-index: 1;
          }
        
        }
        
        .hr-header-line {
          margin: 25px auto 30px;
          padding: 0;
          width: 100px;
          border: 0;
          border-top: solid 6px;
          border-color: #6366F2;
          border-radius: 50%;
          opacity: 1;
        }
        
        /* Hamburger Menu */
        .ham-menu {
          display: inline-block;
          position: relative;
          margin-left: -4rem;
          z-index: 999;
          background-color: #111828;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 2rem;
          opacity: 0.7;
          left: 5rem;
          top: 2.5rem;
          transition: all .25s linear;
        }
        
        @media (min-width: 992px) {
          .show-mobile {
            display: none;
          }
        }
        
        .ham-menu:hover {
          opacity: 1;
          cursor: pointer;
        }
        
        span.ham-menu-bar1 {
          display: inline-block;
          position: absolute;
          background-color: #8183ff;
          width: 24px;
          height: 3px;
          top: 0rem;
          transition: all .05s linear;
          transform: rotate(-4deg);
        }
        
        span.ham-menu-bar2 {
          display: inline-block;
          background-color: #8183ff;
          position: absolute;
          width: 24px;
          height: 3px;
          top: 0.55rem;
          transition: all .25s linear;
          transform: rotate(2deg);
        }
        
        span.ham-menu-bar3 {
          display: inline-block;
          background-color: #8183ff;
          position: absolute;
          width: 24px;
          height: 3px;
          top: 1.1rem;
          transition: all .25s linear;
          transform: rotate(-2deg);
        }
        
        span.ham-menu-bar1--touch {
          display: inline-block;
          position: absolute;
          background-color: #8183ff;
          width: 30px;
          height: 3px;
          top: 16px;
          opacity: 0;
          transition: all .05s linear;
        }
        
        span.ham-menu-bar2--touch {
          display: inline-block;
          background-color: #8183ff;
          position: absolute;
          width: 30px;
          height: 3px;
          opacity: 1;
          top: 0.6rem;
          transition: all .25s linear;
          transform: rotate(45deg);
        }
        
        span.ham-menu-bar3--touch {
          display: inline-block;
          background-color: #8183ff;
          position: absolute;
          width: 30px;
          height: 3px;
          top: 0.6rem;
          opacity: 1;
          transition: all .25s linear;
          transform: rotate(-45deg);
        }
        
        /* Product Item */
        .product {
          border-radius: 1%;
          border: solid gray 1px;
        }
        
        @media (max-width: 575px) {
        
          .product {
            margin-right: -16px;
          }
        }
        
        .ant-card-body {
          padding: 0;
        }
        
        .product-info {
          padding: 1.2rem;
        }
        
        .product-info--detail {
          padding: 0 1.2rem;
        }
        
        .product-category {
          color: white;
          opacity: 0.4;
          margin-bottom: 0.2rem;
        }
        
        .product-name {
          color: white;
          margin-bottom: 0.5rem;
        }
        
        .product-description {
          color: white;
          opacity: 0.6;
          font-size: 1rem;
          margin-bottom: 1rem;
        }
        
        .product-more {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
        }
        
        .product-link {
          text-decoration: none;
          align-self: center;
          color: #8183ff;
        }
        
        /* Feeder */
        .feed {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 2rem;
          padding-top: 10vh;
        }
        
        .feed-item {
          border-radius: 1%;
          border: solid gray 1px;
          padding: 1rem;
          margin-left: auto;
          margin-right: auto;
        }
        
        .feed-item__content {
          height: 100px;
        }
        
        /* Footer */
        .footer {
          margin-top: 3rem;
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .hr-footer-line {
          margin: 25px auto 30px;
          padding: 0;
          width: 300px;
          border: 0;
          border-top: solid 2px;
          border-color: #3e3f97;
          opacity: 1;
          border-radius: 0.2rem;
        }
        
        /* Detail Page */
        .product-image {
          width: 100%;
          height: 16rem;
          object-fit: cover;
          object-position: center;
          border-radius: 2%;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        
        .product-name--large {
          font-size: 1.5rem;
        }
        
        .product-price--large {
          font-size: 1.5rem;
        }
        
        .product-price-wrap {
          display: flex;
          flex-direction: column;
        }
        
        .product-status,
        .product-qty {
          font-size: 1rem;
          opacity: 0.7;
        }
        
        .qty-number {
          color: white;
          background-color: #111828;
        }
        
        .select-style {
          font-size: 0.8rem;
        }
        
        .btn-tocar {
          height: auto;
          font-size: 1.2rem;
          padding: 0.5rem 2rem;
        }
        
        @media (min-width: 992px) {
          .product-image {
            height: 24rem;
          }
        }
        
        /* spinner */
        .spinner-wrap {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        
        .spinner {
          margin-top: 20vh;
        }
        
        /* Login/Register/Shipping Form */
        .placeorder-card,
        .shipping-form,
        .login-form,
        .register-form {
          background-color: #fff;
          padding: 1rem;
          margin-left: auto;
          margin-right: auto;
        }
        
        .login-form {
          max-width: 20rem;
        }
        
        .register-form {
          max-width: 30rem;
        }
        
        .shipping-form {
          max-width: 40rem;
        }
        
        .placeorder-card {
          max-width: 100vw;
        }
        
        .login-form__forgot {
          float: right;
        }
        
        .ant-col-rtl .login-form__forgot {
          float: left;
        }
        
        .login-form__button {
          width: 100%;
        }
        
        .login-form__error-wrap {
          margin-top: 1rem;
          margin-left: auto;
          margin-right: auto;
          padding: 0.7rem;
          width: 80%;
          border: solid 1px darkred;
          border-radius: 4px;
        }
        
        .login-form__error-title {
          color: darkred;
        }
        
        .login-form__error-message {
          padding-top: 0;
          margin-top: 0;
          font-size: 0.5rem;
        }
        
        /* Profile */
        .profile-text {
          color: black;
        }
        
        /* Checkout Steps */
        .checkout-steps {
          font-size: 0.6rem;
          width: 80%;
          margin-bottom: 2rem;
        }
        .checkout-steps > div {
          border-top: 0.3rem #c0c0c0 solid;
          color: #c0c0c0;
          flex: 1;
          padding: 0.2rem;
          font-weight: bold;
        }
        .checkout-steps > div.active {
          border-top-color: #6366F2;
          color: #6366F2;
        }
        
        /* PlaceOrder / Order Card */
        .card {
          border: 0.1rem #c0c0c0 solid;
          border-radius: 0.5rem;
          margin-top: 1rem;
        }
        
        .card-body {
          padding: 1rem;
        }
      `}</style>

    </Layout>
  );
}

export const getStaticProps = async () => {
  const jsonProducts = await getProducts("/");
  return {
    props: { jsonProducts },
  };
}

export default Home;