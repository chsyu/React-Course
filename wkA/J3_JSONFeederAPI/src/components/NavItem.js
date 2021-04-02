import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import { pageContentsSet, activeNavItemSet } from "../actions";
import { getJSON } from "../api";

export default function NavItem(props) {
  const { children, to, className, activeClassName, onClose } = props;
  const { state, dispatch } = useContext(StoreContext);

  const onClick = async () => {
   const json = getJSON(to);
   pageContentsSet(dispatch, children, json);
   activeNavItemSet(dispatch, to);
   onClose && onClose();
  };
  
  return (
    <Link to={to}>
      <div
        onClick={onClick}
        className={`
            ${className} 
            ${state.navBar.activeItem === to ? activeClassName : ""}`}
      >
        {children}
      </div>
    </Link>
  );
}
