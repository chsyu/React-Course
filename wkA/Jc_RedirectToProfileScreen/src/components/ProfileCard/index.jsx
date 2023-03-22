import { useSelector } from "react-redux";
import styles from "./profilecard.module.css"
import { selectUserInfo } from "../../redux/usersSlice";

const ProfileCard = ({ redirect }) => {
  const userInfo = useSelector(selectUserInfo);

  return (
    <h1 style={{
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }}>{userInfo.displayName}'s profile page ...</h1>
  );
};
export default ProfileCard;
