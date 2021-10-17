import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { StoreContext } from "../store";
import CheckoutSteps from "./CheckoutSteps";
import { setPage } from "../actions"

export default function ShippingHeader(props) {
  const { dispatch } = useContext(StoreContext);

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
