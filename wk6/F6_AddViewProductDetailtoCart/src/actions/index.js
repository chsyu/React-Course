import {
  SET_PAGE_CONTENT,
  SET_NAVBAR_ACTIVEITEM,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
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
    type: ADD_CART_ITEM,
    payload: item,
  });
};

export const cartItemRemove = (dispatch, productId) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: productId,
  });
};

export const pageContentsSet = (dispatch, title, products) => {
  dispatch({
    type: SET_PAGE_CONTENT,
    payload: {title, products},
  });
};

export const activeNavItemSet = (dispatch, activeNavItem) => {
  dispatch({
    type: SET_NAVBAR_ACTIVEITEM,
    payload: activeNavItem,
  });
};
