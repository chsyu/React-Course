export default function ShippingHeader(props) {

  return (
    <header className="header">
      <div className="header-wrap">
        <div className="header-text">
          <h1 className="header-title" >{props.title}</h1>
        </div>
      </div>
    </header>
  );
}
