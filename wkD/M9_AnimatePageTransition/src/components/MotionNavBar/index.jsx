import MotionNavLink from '../MotionNavLink';
import { Drawer } from 'antd';
import { motion } from "framer-motion";

import styles from './navbar.module.css';

export default function NavBar({ open, onClose }) {

    const navAnimation = {
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .4,
                delayChildren: 1,
            }
        }
    }

    const NavBarContent = (props) => (
        <motion.ul {...props} style={{  listStyleType: 'none'}} variants={navAnimation} initial={"hidden"} animate={"visible"}>
            <MotionNavLink to="/products/category/tableware">
                Tableware
            </MotionNavLink>
            <MotionNavLink to="/products/category/cookware">
                Cookware
            </MotionNavLink>
            <MotionNavLink to="/products/category/home-accessories">
                Home accessories
            </MotionNavLink>
            <MotionNavLink to="/products/category/lighting">
                Lighting
            </MotionNavLink>
            <MotionNavLink to="/products/category/textile">
                Textile
            </MotionNavLink>
            <MotionNavLink to="/products/category/furniture">
                Furniture
            </MotionNavLink>
        </motion.ul>
    )

    return (
        <>
            <NavBarContent className={styles.navBar} />
            <Drawer
                title="CATEGORY"
                placement="left"
                onClose={onClose}
                open={open}
            >
                <NavBarContent className={styles.drawer} />
            </Drawer>
        </>

    );
}