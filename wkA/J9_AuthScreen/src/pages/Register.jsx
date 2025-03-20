import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header'
import RegisterCard from '@/components/RegisterCard'
import Footer from '@/components/Footer'

function Register() {

   const title = "Register";
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
            <RegisterCard />
         </div>
         <Footer className="footer" />
      </div>
   )
}

export default Register
