import { useContext } from "react";
import Link from 'next/link'
import { StoreContext } from "../store";
import { setPage } from "../actions";

export default function NavItem(props) {
  const { children, to, className, activeClassName, onClose } = props;
  const { state, dispatch } = useContext(StoreContext);

  const onClick = () => {
    setPage(dispatch, to, children);
    onClose && onClose();
  };

  return (
    <Link href={to}>
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
