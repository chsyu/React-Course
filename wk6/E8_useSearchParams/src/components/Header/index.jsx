import { useState } from "react";
import Link from "../Link"
import NavBar from "../NavBar";
import styles from "./header.module.css";
import HamburgerMenu from "../HamburgerMenu"
import CartSummary from "../CartSummary";

export default function Header({ title, slogan }) {
    const [isOnTouch, setIsOnTouch] = useState(false);

    return (
        <div className="container">
            <div className={styles.header}>
                <div className={styles.wrap}>
                    <HamburgerMenu
                        onClick={() => setIsOnTouch(!isOnTouch)}
                        isOnTouch={isOnTouch}
                    />
                    <Link to="/">
                        <h1 className={styles.headerTitle}>
                            {title}
                        </h1>
                    </Link>

                    <p className={styles.headerSlogan}>
                        {slogan}
                    </p>
                    <CartSummary />
                </div>


                <hr className={styles.hrHeaderLine} />
                <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
            </div>
        </div>
    );
}

