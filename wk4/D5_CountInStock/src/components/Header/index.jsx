import { Link } from "react-router-dom"
import NavBar from "../NavBar";
import styles from "./header.module.css";

export default function Header({ title, slogan }) {

    return (
        <div className={styles.header}>
            <Link to="/"  style={{ textDecoration: 'none' }}>
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

