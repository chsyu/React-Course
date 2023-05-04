import { UserOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useUserInfo } from "../../react-query";
import styles from "./userinfo.module.css";

export default function UserInfo(props) {
   const { data: userInfo} = useUserInfo();
   const navigate = useNavigate();

   const goToProfile = () => {
      if(userInfo?.name)
         navigate("/auth/profile")
      else
         navigate("/auth/login?redirect=/auth/profile");
   };

   return (

      <div onClick={goToProfile} style={{ ...props.style }} className={styles.userInfo} >
         {userInfo
            ? <UserOutlined className={styles.userInfoOutlined} />
            : <UserSwitchOutlined className={styles.userInfoOutlined} />
         }
         <p className={styles.userInfoText}>
            {!!userInfo?.name
               ? `${userInfo.name}'s`
               : `請登入`
            }
         </p>
      </div>

   );
}
