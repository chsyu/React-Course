

import { useUserInfo, useLogout } from '@/react-query';

const ProfileCard = () => {
   const { data: userInfo } = useUserInfo();
   const logout = useLogout();

   const handleLogout = () => {
      logout.mutate();
   }

   return (
      <div className="p-6 max-w-sm mx-auto">
         <h2 className="text-2xl font-bold mb-4">Profile Card</h2>
         <p className="opacity-80 mb-4">This is a simple profile card component.</p>
         <p className="opacity-80 mb-4">
            <strong>Name:</strong> {userInfo?.username || 'N/A'}
         </p>
         <p className="opacity-80 mb-4">
            <strong>Email:</strong> {userInfo?.email || 'N/A'}
         </p>
         <p className="opacity-80 mb-4">
            <strong>UID:</strong> {userInfo?.uid || 'N/A'}
         </p>
         <button
            className="bg-blue-500 text-white px-4 py-2 w-[100%] rounded hover:bg-blue-600 transition duration-200"
            onClick={handleLogout}
         >
            Logout
         </button>
      </div>
   );
}
export default ProfileCard;