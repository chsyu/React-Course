import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

export default function NavBar() {
    return (
        <div className={styles.navBar}>
            <NavLink to="/products/category/tableware"
                className={(navData) => (navData.isActive ? styles.navItemActive : styles.navItem)}>
                Tableware
            </NavLink>
            <NavLink to="/products/category/cookware"
                className={(navData) => (navData.isActive ? styles.navItemActive : styles.navItem)}>
                Cookware
            </NavLink>
            <NavLink to="/products/category/home-accessories"
                className={(navData) => (navData.isActive ? styles.navItemActive : styles.navItem)}>
                Home accessories
            </NavLink>
            <NavLink to="/products/category/lighting"
                className={(navData) => (navData.isActive ? styles.navItemActive : styles.navItem)}>
                Lighting
            </NavLink>
            <NavLink to="/products/category/textile"
                className={(navData) => (navData.isActive ? styles.navItemActive : styles.navItem)}>
                Textile
            </NavLink>
            <NavLink to="/products/category/furniture"
                className={(navData) => (navData.isActive ? styles.navItemActive : styles.navItem)}>
                Furniture
            </NavLink>
        </div>
    );
}