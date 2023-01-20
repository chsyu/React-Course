import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";

function Home() {
  return (
    <div className="container" style={styles.mainLayout}>
      <Header 
        style={styles.layoutHeader}
        title="NORDIC NEST Shopping Cart"
        slogan="An example made by Vite."
      />
      <ProductList style={styles.layoutContent} />
      <Footer style={styles.layoutFooter} />
    </div>
  );
}

const styles = {
  mainLayout: {
    display: 'grid',
    minHeight: '100vh',
    gridTemplateAreas: `
      'header'
      'content'
      'footer'
    `,
    gridTemplateRows: 'auto 1fr auto',
    gap: '1em',
  },
  layoutHeader: {
    gridArea: 'header',
    padding: 0,
    height: 'auto',
    lineHeight: 1.6,
    backgroundColor: '#111828',
  },
  layoutFooter: {
    gridArea: 'footer',
    padding: 0,
    height: 'auto',
    lineHeight: 1.6,
    backgroundColor: '#111828',
  },
  layoutContent: {
    gridArea: 'content',
    backgroundColor: '#111828',
  }
}

export default Home;
