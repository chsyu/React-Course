import { createContext } from "react";
import products from "../json/products.json"

export const StoreContext = createContext();  
export function StoreProvider(props) {
   return (
      <StoreContext.Provider value={{title:"NORDIC NEST Shopping Cart"}}>
         {props.children}
      </StoreContext.Provider>
   );
 }