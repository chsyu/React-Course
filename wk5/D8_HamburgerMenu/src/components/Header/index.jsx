import { useState } from "react";
import { Link } from "react-router-dom"
import NavBar from "../NavBar";
import styles from "./header.module.css";
import HamburgerMenu from "../HamburgerMenu"

export default function Header({ title, slogan }) {
    const [isOnTouch, setIsOnTouch] = useState(false);

    return (
        <div className={styles.header}>
            <HamburgerMenu
                onClick={() => setIsOnTouch(!isOnTouch)}
                isOnTouch={isOnTouch}
            />
            <Link to="/" style={{ textDecoration: 'none' }}>
                <h1 className={styles.headerTitle}>
                    {title}
                </h1>
            </Link>

            <p className={styles.headerSlogan}>
                {slogan}
            </p>
            <hr className={styles.hrHeaderLine} />
            <NavBar />
        </div>
    );
}

