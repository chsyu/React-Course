import {
  PAGE_CONTENT_SET,
  NAVBAR_ACTIVEITEM_SET,
  CART_ITEM_ADD,
  CART_ITEM_REMOVE,
} from "../utils/constants";

export const cartItemAdd = (dispatch, product, qty) => {
  const item = {
    id: product.id,
    name: product.name,
    image: product.image,
    price: product.price,
    countInStock: product.countInStock,
    qty,
  };
  dispatch({
    type: CART_ITEM_ADD,
    payload: item,
  });
};

export const cartItemRemove = (dispatch, productId) => {
  dispatch({
    type: CART_ITEM_REMOVE,
    payload: productId,
  });
};

export const pageContentsSet = (dispatch, title, products) => {
  dispatch({
    type: PAGE_CONTENT_SET,
    payload: {title, products},
  });
};

export const activeNavItemSet = (dispatch, activeNavItem) => {
  dispatch({
    type: NAVBAR_ACTIVEITEM_SET,
    payload: activeNavItem,
  });
};
