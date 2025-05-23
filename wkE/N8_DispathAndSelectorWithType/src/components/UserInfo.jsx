import { User } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useUserInfo } from '@/react-query';

export default function UserInfo(props) {
   const navigate = useNavigate();
   const { data: userInfo } = useUserInfo();
   const goToProfile = () => {
      if (userInfo?.email)
         navigate("/auth/profile")
      else
         navigate("/auth/login?redirect=/auth/profile");
   };
   const userName = userInfo?.displayName || userInfo?.email?.split("@")[0] || "請登入";

   return (
      <nav
         onClick={goToProfile}
         style={{ ...props.style }}
         className="cursor-pointer flex flex-col items-center group"
      >
         <User className="w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform" />
         <p className="hidden md:block text-[0.5rem] md:text-[0.7rem] opacity-60 mt-[-0.2rem] md:mt-[0.3rem] text-current">
            {userName}
         </p>
      </nav>
   );
}
