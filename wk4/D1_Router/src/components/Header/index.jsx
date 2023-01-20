import { Grid } from 'antd';
const { useBreakpoint } = Grid;
import { Link } from "react-router-dom"
import styles from "./header.module.css";

export default function Header({ title, slogan }) {
    const { sm } = useBreakpoint();

    return (
        <div className={styles.header}>
            <Link to="/"  style={{ textDecoration: 'none' }}>
                <h1 className={ sm ? styles.headerTitle_sm : styles.headerTitle}>
                    {title}
                </h1>
            </Link>

            <p className={styles.headerSlogan}>
                {slogan}
            </p>
            <hr className={styles.hrHeaderLine} />
        </div>
    );
}

