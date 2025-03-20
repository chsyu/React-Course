import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header'
import LoginCard from '@/components/LoginCard'
import Footer from '@/components/Footer'

function Login() {
   const title = "Login";

  return (
    <div>
      <div className="container mx-auto main-layout min-h-screen">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Header
          title={title}
          slogan="The best place to buy your favorite products"
        />
        <LoginCard />
      </div>
      <Footer className="footer" />
    </div>
  )
}

export default Login
