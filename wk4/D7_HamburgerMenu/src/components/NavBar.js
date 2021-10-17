import { NavLink } from 'react-router-dom';

export default function NavBar({isOnTouch}) {
    const navBarClass = isOnTouch?"nav-bar":"nav-bar collapse-mobile";
    return (
        <div className={navBarClass}>
            <NavLink to="/tableware" className="nav-item" activeClassName="nav-item--active">
                Tableware
            </NavLink>
            <NavLink to="/cookware" className="nav-item" activeClassName="nav-item--active">
                Cookware
            </NavLink>
            <NavLink to="/home-accessories" className="nav-item" activeClassName="nav-item--active">
                Home accessories
            </NavLink>
            <NavLink to="/lighting" className="nav-item" activeClassName="nav-item--active">
                Lighting
            </NavLink>
            <NavLink to="/textile" className="nav-item" activeClassName="nav-item--active">
                Textile
            </NavLink>
            <NavLink to="/furniture" className="nav-item" activeClassName="nav-item--active">
                Furniture
            </NavLink>
        </div>
    );
}