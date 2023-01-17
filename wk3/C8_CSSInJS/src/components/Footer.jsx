export default function Footer() {
    const styles = {
        footer: {
            textAlign: 'center',
        },
        hrFooterLine: {
            margin: '25px auto 30px',
            padding: 0,
            width: '300px',
            border: 0,
            borderTop: 'solid 2px',
            borderColor: '#3e3f97',
            opacity: 1,
            borderRadius: '0.2rem',
        },
        textGray: {
            color: 'white',
            opacity: 0.6,
        },
    }
    return (
        <footer style={styles.footer}>
            <hr style={styles.hrFooterLine} />
            <p style={styles.textGray}>
                Copyright.
            </p>
        </footer>
    );
}