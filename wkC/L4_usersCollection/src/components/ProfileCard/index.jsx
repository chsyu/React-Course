import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import styles from "./profilecard.module.css"
import { selectUserInfo } from "../../redux/usersSlice";
import { useUpdateProfile, useLogout } from "../../react-query";

const ProfileCard = ({ redirect }) => {
  const userInfo = useSelector(selectUserInfo);
  const update = useUpdateProfile();
  const logout = useLogout();
  const navigate = useNavigate();

  const onLogout = () => {
    logout.mutate();
    navigate("/");
  }

  return (
    <div className={styles.profileForm}>
      <h1>{userInfo?.displayName}'s profile page ...</h1>
      <Button type="primary" className={styles.profileForm__button} onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
};
export default ProfileCard;
