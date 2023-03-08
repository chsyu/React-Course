import { useEffect } from "react";
import { useSelector } from "react-redux";
import { UserOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { selectUserInfo, selectIsRemember } from "../../redux/usersSlice";
import styles from "./userinfo.module.css";

export default function UserInfo(props) {
   const userInfo = useSelector(selectUserInfo);
   const isRemember = useSelector(selectIsRemember)
   const navigate = useNavigate();

   const goToProfile = () => {
      if (!userInfo)
         navigate("/auth/login?redirect=/auth/profile");
      else
         navigate("/auth/profile");
   };

   return (

      <nav onClick={goToProfile} style={{ ...props.style }} className={styles.userInfo} >
         {userInfo
            ? <UserOutlined className={styles.userInfoOutlined} />
            : <UserSwitchOutlined className={styles.userInfoOutlined} />

         }
         <p className={styles.userInfoText}>
            {userInfo
               ? `${userInfo.displayName}'s`
               : `請登入`
            }
         </p>
      </nav>

   );
}
