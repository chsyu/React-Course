import { useUserInfo, useLogout, useUpdateProfile } from '@/react-query';
import { useState, useEffect } from 'react';
import { Home, Phone, User } from "lucide-react";
import { FormInput, AuthFormLayout } from "@/components/common";
import type { UpdateUserInfoParams } from '@/types';

const ProfileCard = () => {
   const { data: userInfo } = useUserInfo();
   const logout = useLogout();
   const updateProfile = useUpdateProfile();
   const [formData, setFormData] = useState({
      username: userInfo?.username || '',
      adrs: userInfo?.adrs || '',
      tel: userInfo?.tel || '',
    });

   const handleLogout = () => {
      logout.mutate();
   }

   const onChange = (e) => {
      const { name, type, checked, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    };

   const handleFinish = (e) => {
      e.preventDefault();
      const updateParams: UpdateUserInfoParams = {
         ...formData,
         uid: userInfo.uid
       };
     
      updateProfile.mutate(updateParams);
   }

   useEffect(() => {
      setFormData({
         username: userInfo?.username || '',
         adrs: userInfo?.adrs || '',
         tel: userInfo?.tel || '',
      });
   }
   , [userInfo]);

   return (
      <AuthFormLayout onSubmit={handleFinish}>
         <FormInput
            label="Your Name"
            name="username"
            type="text"
            placeholder="e.g., John Doe"
            icon={User}
            value={formData.username}
            onChange={onChange}
         />
         <FormInput
            label="Your Address"
            name="adrs"
            type="text"
            placeholder="e.g., No.128, He-Ping E. Rd., Sec. 2, Taipei City"
            icon={Home}
            value={formData.adrs}
            onChange={onChange}
         />
         <FormInput
            label="Your Phone Number"
            name="tel"
            type="text"
            placeholder="e.g., (02)2732-1104"
            icon={Phone}
            value={formData.tel}
            onChange={onChange}
         />                  
         <button
            className="mt-[4rem] opacity-60 px-4 py-2 w-[100%] border border-gray-500 rounded hover:opacity-100 transition duration-200"
            type="submit"
         >
            Update Profile
         </button>
         <button
            className="bg-blue-500 text-white px-4 py-2 w-[100%] rounded hover:bg-blue-600 transition duration-200"
            onClick={handleLogout}
         >
            Logout
         </button>
      </AuthFormLayout>
   );
}
export default ProfileCard;