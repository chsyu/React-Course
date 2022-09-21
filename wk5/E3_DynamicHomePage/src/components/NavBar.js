import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="nav-bar">
            <NavLink to="/category/tableware" className={["nav-item", (navData) => navData.isActive ? "active" : "" ]}>
                Tableware
            </NavLink>
            <NavLink to="/category/cookware" className={["nav-item", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                Cookware
            </NavLink>
            <NavLink to="/category/home-accessories" className={["nav-item", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                Home accessories
            </NavLink>
            <NavLink to="/category/lighting" className={["nav-item", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                Lighting
            </NavLink>
            <NavLink to="/category/textile" className={["nav-item", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                Textile
            </NavLink>
            <NavLink to="/category/furniture" className={["nav-item", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                Furniture
            </NavLink>
        </div>
    );
}