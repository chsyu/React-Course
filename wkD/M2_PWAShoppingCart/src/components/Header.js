import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { StoreContext } from "../store";
import CartSummary from "./CartSummary";
import UserInfo from "./UserInfo";
import { setPage } from "../actions"

export default function Header({ title }) {
  const { dispatch } = useContext(StoreContext);
  const history = useHistory();

  const onClickHeader = () => {
    setPage(dispatch, "/",  "NORDIC NEST Shopping Cart");
    history.push("/");
  };

  return (
    <header className="header">
      <div className="header-wrap">
        <div className="header-text">
          <h1 className="header-title" onClick={onClickHeader}>{title}</h1>
          <p className="header-slogan">An example made by Create-React-App.</p>
        </div>

        <div className="header-left">
          <UserInfo style={{marginRight: '20px'}} />
          <CartSummary />
        </div>
      </div>

      <hr className="hr-header-line" />
    </header>
  );
}
