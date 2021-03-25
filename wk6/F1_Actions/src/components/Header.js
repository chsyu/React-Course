import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import CartSummary from "./CartSummary";
import { pageContentsSet, activeNavItemSet } from "../actions";
import { getJSON } from "../api";

export default function Header({ title }) {
  const { dispatch } = useContext(StoreContext);
  const onClickHeader = () => {
    pageContentsSet(dispatch, "NORDIC NEST Shopping Cart", getJSON("/"));
    activeNavItemSet(dispatch, "/");
  };

  return (
    <header className="header">
      <div className="header-wrap">
        <div className="header-text" onClick={onClickHeader}>
          <Link to="/">
            <h1 className="header-title">{title}</h1>
          </Link>
          <p className="header-slogan">An example made by Create-React-App.</p>
        </div>
        <CartSummary />
      </div>

      <hr className="hr-header-line" />
    </header>
  );
}
