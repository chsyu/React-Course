import { useContext } from "react";
import Link from 'next/link'
import { StoreContext } from "../store";
import { setPage } from "../actions";

export default function NavItem(props) {
  const { children, to, className, activeClassName, onClose, jsonFeeder } = props;
  const { state, dispatch } = useContext(StoreContext);

  const onClick = () => {
    setPage(dispatch, to, children);
    onClose && onClose();
  };

  return (
    !jsonFeeder?
    (
      <Link href="/products/[page_name]" as={to}>
        <div
          onClick={onClick}
          className={`
              ${className} 
              ${state.navBar.activeItem === to ? activeClassName : ""}`}
        >
          {children}
        </div>
      </Link>
    ) : (
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
    )
  );
}
