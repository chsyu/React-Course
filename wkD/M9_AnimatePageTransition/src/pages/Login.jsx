import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router';
import Header from '@/components/Header'
import LoginCard from '@/components/LoginCard'
import Footer from '@/components/Footer'

function Login() {
   const title = "Login";
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect");
  const redirectPath = redirect ? redirect : "/";

  return (
    <div className="main-layout min-h-screen">
      <div className="container mx-auto ">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Header
          title={title}
          slogan="The best place to buy your favorite products"
        />
        <LoginCard redirect={redirectPath} />
      </div>
      <Footer />
    </div>
  )
}

export default Login
