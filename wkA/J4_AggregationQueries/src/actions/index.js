import {
  SET_ALL_PRODUCTS,
  SET_PAGE_CONTENT,
  SET_NAVBAR_ACTIVEITEM,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  SET_PRODUCT_DETAIL,
  BEGIN_PRODUCTS_FEED,
  SUCCESS_PRODUCTS_FEED,
  FAIL_PRODUCTS_FEED,
  BEGIN_PRODUCTS_REQUEST,
  SUCCESS_PRODUCTS_REQUEST,
  FAIL_PRODUCTS_REQUEST,
} from "../utils/constants";
import { getProducts } from "../api";
import jsonInfo from "../json/jsonInfo.json";

export const addCartItem = (dispatch, product, qty) => {
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

export const removeCartItem = (dispatch, productId) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: productId,
  });
};

export const setProductDetail = (dispatch, productId, qty, products) => {
  if (products) {
    const product = products.find(
      x => x.id === productId
    );

    if (qty === 0 && product.countInStock > 0)
      qty = 1;

    dispatch({
      type: SET_PRODUCT_DETAIL,
      payload: {
        product,
        qty,
      }
    })
  }
}

// export const pageContentsSet = (dispatch, title, products) => {
//   dispatch({
//     type: SET_PAGE_CONTENT,
//     payload: { title, products },
//   });
// };

// export const activeNavItemSet = (dispatch, activeNavItem) => {
//   dispatch({
//     type: SET_NAVBAR_ACTIVEITEM,
//     payload: activeNavItem,
//   });
// };

export const setPage = async (dispatch, url, title) => {
  let products = [];
  dispatch({ type: BEGIN_PRODUCTS_REQUEST });
  try {
    products = await getProducts(url);
    dispatch({
      type: SET_PAGE_CONTENT,
      payload: { title, products },
    });
    if(url === "/")
      dispatch({
        type: SET_ALL_PRODUCTS,
        payload: products,
      })
    dispatch({
      type: SET_NAVBAR_ACTIVEITEM,
      payload: url,
    });    
    dispatch({ type: SUCCESS_PRODUCTS_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCTS_REQUEST, payload: error });
  }
}

export const getTitle = url => {
  const json = jsonInfo.find(
    x => x.url === url
  );
  return json.title;
}