import { NavLink } from 'react-router-dom';

export default function NavBar({ isOnTouch }) {
  return (
    <>
      <div className={`nav-bar-wrap ${isOnTouch ? "" : "collapse-mobile-wrap"}`}></div>
      <div className={`nav-bar ${isOnTouch ? "" : "collapse-mobile"}`}>
        <NavLink
          to="/tableware"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          Tableware
        </NavLink>
        <NavLink
          to="/cookware"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          Cookware
        </NavLink>
        <NavLink
          to="/home-accessories"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          Home accessories
        </NavLink>
        <NavLink
          to="/lighting"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          Lighting
        </NavLink>
        <NavLink
          to="/textile"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          Textile
        </NavLink>
        <NavLink
          to="/furniture"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          Furniture
        </NavLink>
      </div>

    </>
  );
}