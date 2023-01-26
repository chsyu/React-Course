import { NavLink } from 'react-router-dom';
import { Drawer } from 'antd';

import styles from './navbar.module.css';

export default function NavBar({ open, onClose }) {

    const NavBarContent = () => (
        <>
            <NavLink to="/products/category/tableware"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                Tableware
            </NavLink>
            <NavLink to="/products/category/cookware"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                Cookware
            </NavLink>
            <NavLink to="/products/category/home-accessories"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                Home accessories
            </NavLink>
            <NavLink to="/products/category/lighting"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                Lighting
            </NavLink>
            <NavLink to="/products/category/textile"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                Textile
            </NavLink>
            <NavLink to="/products/category/furniture"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                Furniture
            </NavLink>        
        </>
    )

    return (
        <>
            <div className={styles.navBar}>
                <NavBarContent />
            </div>
            <Drawer 
                title="CATEGORY" 
                placement="left" 
                onClose={onClose} 
                open={open} 
            >
                <div className={styles.drawer}>
                    <NavBarContent />
                </div>
            </Drawer>
        </>

    );
}