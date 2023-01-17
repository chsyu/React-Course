export default function ProductItem({ product }) {
   const styles = {
      item: {
         backgroundColor: '#111828',
         borderRadius: '1%',
         border: 'solid gray 1px',
         padding: 0,
      },
      info: {
         padding: '1.2rem',
      },
      category: {
         color: 'white',
         opacity: 0.4,
         marginBottom: '0.2rem',
      },
      name: {
         color: 'white',
         marginBottom: '0.5rem',
      },
      description: {
         color: 'white',
         opacity: 0.6,
         marginBottom: '1rem',
      },
      more: {
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'center',
      },
      link: {
         textDecoration: 'none',
         alignSelf: 'center',
         color: '#8183ff',
      },
      textGray: {
         color: 'white',
         opacity: 0.6,
      },

   };

   return (
      <div style={styles.item}>
         <a href="/">
            <img
               style={{ width: '100%' }}
               src={product.image}
               alt={product.name} />
         </a>
         <div style={styles.info}>
            <h6 style={styles.category}>
               {product.category}
            </h6>
            <h2 style={styles.name}>
               {product.name}
            </h2>
            <p style={styles.description}>
               {product.description}
            </p>
            <div style={styles.more}>
               <a href="/" style={styles.link}>
                  See More ...
               </a>
               <span
                  style={styles.textGray}>
                  USD {product.price}.00
               </span>
            </div>
         </div>
      </div>
   );
}
