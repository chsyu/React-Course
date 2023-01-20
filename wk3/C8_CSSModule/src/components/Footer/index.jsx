import styles from './footer.module.css';

export default function Footer() {

    return (

        <div>
            <hr className={styles.hrFooterLine} />
            <footer className={styles.footer}>
                <p className={styles.copyRight}>
                    Copyright
                </p>
            </footer>
        </div>

    );
}