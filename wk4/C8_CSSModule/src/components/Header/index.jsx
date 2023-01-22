import styles from "./header.module.css";

export default function Header({ title, slogan }) {

    return (
        <div className={styles.header}>
            <h1 className={styles.headerTitle}>
                {title}
            </h1>

            <p className={styles.headerSlogan}>
                {slogan}
            </p>
            <hr className={styles.hrHeaderLine} />
        </div>
    );
}

