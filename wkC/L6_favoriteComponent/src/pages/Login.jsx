import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import { useSearchParams } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import LoginCard from '../components/LoginCard';

function Login() {
   const {
      token: { colorBgBase, colorTextBase },
   } = theme.useToken();
   const [searchParams] = useSearchParams();
   const redirect = searchParams.get('redirect');

   return (
      <div className="mainLayout">
         <Helmet>
            <title>login</title>
            <style>{`
               body { 
                  background-color: ${colorBgBase}; 
                  color: ${colorTextBase}
               }
            `}</style>
         </Helmet>
         <Header
            className="layoutHeader"
            title="Login"
            slogan="An example made by Vite."
         />
         <div className="layoutContent container">
            <LoginCard redirect={redirect} />
         </div>
         <Footer className="layoutFooter" />
      </div>
   );
}

export default Login;
