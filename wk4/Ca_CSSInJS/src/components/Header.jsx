import { Grid } from 'antd';
const { useBreakpoint } = Grid;

export default function Header({ title, slogan }) {
    const { sm } = useBreakpoint();
    const styles = {
        header: {
            textAlign: 'center',
        },
        headerTitle: {
            color: 'white',
            fontSize: sm ? '1.8rem' : '1.3rem',
            padding: 0,
            paddingTop: '1rem',
        },
        headerSlogan: {
            color: 'white',
            opacity: 0.6,
            padding: 0,
            margin: 0,
            lineHeight: 0.8,
        },
        hrHeaderLine: {
            margin: '25px auto 30px',
            padding: 0,
            width: '100px',
            border: 0,
            borderTop: 'solid 6px',
            borderColor: '#6366F2',
            opacity: 1,
        },
    }

    return (
        <div style={styles.header}>
            <h1 style={styles.headerTitle}>
                {title}
            </h1>

            <p style={styles.headerSlogan}>
                {slogan}
            </p>
            <hr style={styles.hrHeaderLine} />
        </div>
    );
}

