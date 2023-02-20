import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import RegisterCard from '../components/RegisterCard';

function Login() {
   const {
      token: { colorBgBase, colorTextBase },
   } = theme.useToken();

   return (
      <div className="mainLayout">
         <Helmet>
            <title>register</title>
            <style>{`
               body { 
                  background-color: ${colorBgBase}; 
                  color: ${colorTextBase}
               }
            `}</style>
         </Helmet>
         <Header
            className="layoutHeader"
            title="Register"
            slogan="An example made by Vite."
         />
         <div className="layoutContent container">
            <RegisterCard />
         </div>
         <Footer className="layoutFooter" />
      </div>
   );
}

export default Login;
