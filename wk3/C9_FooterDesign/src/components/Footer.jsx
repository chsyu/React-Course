export default function Footer() {
    const styles = {
        footer: {
            display: 'grid',
            paddingRight: '1rem',
            paddingLeft: '1rem',
            gridTemplateAreas: `
              'content followUs contactUs'
              'copyRight copyRight copyRight'
            `,
            gridTemplateRows: 'auto 3rem',
            gridTemplateColumns: '12fr 2fr minmax(7rem, 1fr)',
            gap: '1em',        
        },
        hrFooterLine: {
            margin: '25px auto 30px',
            padding: 0,
            width: '100%',
            border: 0,
            borderTop: 'solid 2px',
            borderColor: '#3e3f97',
            opacity: 1,
            borderRadius: '0.2rem',
        },
        content: {
            gridArea: 'content',
        },
        followUs: {
            gridArea: 'followUs',
        },
        contactUs: {
            gridArea: 'contactUs',
        },
        iconsArea: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        icon: {
            display: 'block',
            width: '2rem',
            height: '2rem',
            paddingRight: '0.5rem',
        },
        copyRight: {
            gridArea: 'copyRight',
            height: '4rem',
            color: 'white',
            opacity: 0.6,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
        }
    }
    return (
        <div>
            <hr style={styles.hrFooterLine} />
            <footer style={styles.footer}>
                <div style={styles.content}>
                    <p style={{fontWeight: 800}}>DESCRIPTIONS</p>
                    <p style={{textIndent: '1rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deleniti iste sit enim. Veniam eos sequi laudantium optio, saepe excepturi illo autem quibusdam delectus illum ipsa? Nobis culpa debitis error!</p>
                </div>
                <div style={styles.followUS}>
                    <p style={{fontWeight: 800}}>FOLLOW US</p>
                    <div style={styles.iconsArea}>
                        <a href="#">
                            <img style={styles.icon} src="./images/nn-icon-facebook.svg" alt="facebook" />
                        </a>
                        <a href="#">
                            <img style={styles.icon} src="./images/nn-icon-instagram.svg" alt="instagram" />
                        </a>
                        <a href="#">
                            <img style={styles.icon} src="./images/nn-icon-tiktok.svg" alt="tiktok" />
                        </a>
                    </div>
                </div>
                <div style={styles.contactUS}>
                    <p style={{fontWeight: 800}}>CONTACT US</p>
                    <p>02 2732 1104</p>
                </div>
                <p style={styles.copyRight}>
                    © 2006 - 2023 Copyright Digital Technology Design
                </p>
            </footer>
        </div>

    );
}