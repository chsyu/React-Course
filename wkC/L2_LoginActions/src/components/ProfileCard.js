import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button } from 'antd';
import { logoutFromFirebase } from '../actions'
import { StoreContext } from "../store"

const ProfileCard = () => {
   const { state: { userSignin: { userInfo } }, dispatch } = useContext(StoreContext);
   const { displayName, email } = userInfo;
   const history = useHistory();

   const handleLogout = () => {
      logoutFromFirebase(dispatch);
      history.push("/");
   }
   return (
      <div className="login-form">
         <p className="profile-text">User Name: {displayName}</p>
         <p className="profile-text">E-Mail: {email}</p>
         <Button
            type="primary"
            className="login-form__button"
            onClick={handleLogout}
         >
            logout
        </Button>
      </div>
   );
};
export default ProfileCard;
