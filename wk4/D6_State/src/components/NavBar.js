import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="nav-bar">
            <NavLink to="/tableware" className={["nav-item", (navData) => navData.isActive ? "active" : "" ]}>
                Tableware
            </NavLink>
            <NavLink to="/cookware" className={["nav-item", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                Cookware
            </NavLink>
            <NavLink to="/home-accessories" className={["nav-item", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                Home accessories
            </NavLink>
            <NavLink to="/lighting" className={["nav-item", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                Lighting
            </NavLink>
            <NavLink to="/textile" className={["nav-item", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                Textile
            </NavLink>
            <NavLink to="/furniture" className={["nav-item", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                Furniture
            </NavLink>
        </div>
    );
}