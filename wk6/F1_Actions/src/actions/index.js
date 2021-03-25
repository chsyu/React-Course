import {
  PAGE_TITLE_SET,
  PAGE_CONTENT_SET,
  NAVBAR_ITEM_SET,
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
} from "../utils/constants";

export const cartAddItem = (product, qty, cartItemsOld, dispatch) => {
  const item = {
    id: product.id,
    name: product.name,
    image: product.image,
    price: product.price,
    countInStock: product.countInStock,
    qty,
  };
  const findProduct = cartItemsOld.find((x) => x.id === item.id);
  let cartItems;
  if (findProduct) {
    cartItems = cartItemsOld.map((x) => (x.id === findProduct.id ? item : x));
  } else cartItems = [...cartItemsOld, item];
  dispatch({
    type: CART_ADD_ITEM,
    payload: cartItems,
  });
};

export const cartRemoveItem = (productId, cartItemsOld, dispatch) => {
  let cartItems = cartItemsOld.filter((x) => x.id !== productId);
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: cartItems,
  });
};

export const pageContentsSet = (title, products, dispatch) => {
  dispatch({
    type: PAGE_TITLE_SET,
    payload: title,
  });
  dispatch({
    type: PAGE_CONTENT_SET,
    payload: products,
  });
};

export const activeNavItemSet = (activeNavItem, dispatch) => {
  dispatch({
    type: NAVBAR_ITEM_SET,
    payload: activeNavItem,
  });
};
