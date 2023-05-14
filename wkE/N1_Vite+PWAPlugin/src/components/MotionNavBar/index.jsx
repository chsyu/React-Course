import { Drawer } from 'antd';
import { useState } from 'react';
import { motion } from "framer-motion";
import { Grid } from 'antd';
const { useBreakpoint } = Grid;
import MotionNavLink from '../MotionNavLink';

import styles from './navbar.module.css';

export default function NavBar({ open, onClose }) {
    const [selected, setSelected] = useState(0);
    const { md } = useBreakpoint();

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
        <motion.ul {...props} style={{ listStyleType: 'none' }}>
            <MotionNavLink
                onClick={() => setSelected(0)}
                id={0}
                selected={selected}
                to="/products/category/tableware">
                Tableware
            </MotionNavLink>
            <MotionNavLink
                onClick={() => setSelected(1)}
                id={1}
                selected={selected}
                to="/products/category/cookware">
                Cookware
            </MotionNavLink>
            <MotionNavLink
                onClick={() => setSelected(2)}
                id={2}
                selected={selected}
                to="/products/category/home-accessories">
                Home accessories
            </MotionNavLink>
            <MotionNavLink
                onClick={() => setSelected(3)}
                id={3}
                selected={selected}
                to="/products/category/lighting">
                Lighting
            </MotionNavLink>
            <MotionNavLink
                onClick={() => setSelected(4)}
                id={4}
                selected={selected}
                to="/products/category/textile">
                Textile
            </MotionNavLink>
            <MotionNavLink
                onClick={() => setSelected(5)}
                id={5}
                selected={selected}
                to="/products/category/furniture">
                Furniture
            </MotionNavLink>
        </motion.ul>
    )

    return (
        <motion.div>
            {md ? (
                <motion.div>
                    <NavBarContent className={styles.navBar} />
                </motion.div>
            ) : (
                <Drawer
                    title="CATEGORY"
                    placement="left"
                    onClose={onClose}
                    open={open}
                >
                    <motion.div>
                        <NavBarContent className={styles.Drawer} />
                    </motion.div>
                </Drawer>
            )}
        </motion.div>

    );
}