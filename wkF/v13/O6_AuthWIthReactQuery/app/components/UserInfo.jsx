'use client'
import { useSelector } from "react-redux";
import { UserOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { useRouter } from "next/navigation";
import { selectUserInfo, selectIsRemember } from "../redux/usersSlice";

export default function UserInfo(props) {
   const userInfo = useSelector(selectUserInfo);
   const isRemember = useSelector(selectIsRemember)
   const router = useRouter();

   const goToProfile = () => {
      if (!userInfo)
         router.push("/auth/login?redirect=/auth/profile");
      else
         router.push("/auth/profile");
   };

   return (
      <nav onClick={goToProfile} style={{ ...props.style }} className="header-cart-summary" >
         {userInfo
            ? <UserOutlined className='userInfo-outlined' />
            : <UserSwitchOutlined className='userInfo-outlined' />

         }
         <p className="userInfo-text">
            {userInfo
               ? `${userInfo.username}'s`
               : `請登入`
            }
         </p>
      </nav>
   );
}
