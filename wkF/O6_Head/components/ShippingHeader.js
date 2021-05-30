import { useContext } from "react";
import { useRouter } from 'next/router'
import { StoreContext } from "../store";
import CheckoutSteps from "./CheckoutSteps";
import { setPage } from "../actions"

export default function ShippingHeader(props) {
  const { dispatch } = useContext(StoreContext);
  const router = useRouter()

  const onClickHeader = () => {
    setPage(dispatch, "/",  "NORDIC NEST Shopping Cart");
    router.push("/");
  };

  return (
    <header className="header">
      <div className="header-wrap">
        <div className="header-text">
          <h1 className="header-title" onClick={onClickHeader}>{props.title}</h1>
        </div>
      </div>

      <CheckoutSteps {...props}></CheckoutSteps>
    </header>
  );
}
