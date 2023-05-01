import { UserOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styles from "./userinfo.module.css";

export default function UserInfo(props) {
   const navigate = useNavigate();

   const goToProfile = () => {
      navigate("/auth/login?redirect=/auth/profile");
   };

   return (

      <div onClick={goToProfile} style={{ ...props.style }} className={styles.userInfo} >
         <UserSwitchOutlined className={styles.userInfoOutlined} />
         <p className={styles.userInfoText}>
            請登入
         </p>
      </div>

   );
}
