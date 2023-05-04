import {
  SET_PAGE_TITLE,
  SET_PAGE_CONTENT,
  SET_NAVBAR_ACTIVEITEM,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  EMPTY_CART,
  SAVE_SHIPPING_ADDRESS,
  SAVE_PAYMENT_METHOD,
  SET_PRODUCT_DETAIL,
  BEGIN_PRODUCTS_FEED,
  SUCCESS_PRODUCTS_FEED,
  FAIL_PRODUCTS_FEED,
  BEGIN_PRODUCTS_REQUEST,
  SUCCESS_PRODUCTS_REQUEST,
  FAIL_PRODUCTS_REQUEST,
  BEGIN_LOGIN_REQUEST,
  SUCCESS_LOGIN_REQUEST,
  FAIL_LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REMEMBER_LOGIN,
  BEGIN_REGISTER_REQUEST,
  SUCCESS_REGISTER_REQUEST,
  FAIL_REGISTER_REQUEST,
  BEGIN_UPDATE_USERINFO,
  SUCCESS_UPDATE_USERINFO,
  FAIL_UPDATE_USERINFO,
  BEGIN_ORDER_CREATE,
  SUCCESS_ORDER_CREATE,
  FAIL_ORDER_CREATE,
  RESET_ORDER,
  BEGIN_ORDER_DETAIL,
  SUCCESS_ORDER_DETAIL,
  FAIL_ORDER_DETAIL,
} from "../utils/constants";

import {
  getProducts,
  getProductById,
  feedProducts,
  signInWithEmailPassword,
  registerWithEmailPassword,
  signOut,
  updateUserInfoApi,
  createOrderApi,
  getOrderById,
  checkLoginApi,
} from "../api";

export const addCartItem = (dispatch, product, qty) => {
  const item = {
    id: product.id,
    category: product.category,
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

export const saveShippingAddress = (dispatch, shippingAddress) => {
  dispatch({
    type: SAVE_SHIPPING_ADDRESS,
    payload: shippingAddress,
  });
  localStorage.setItem('shippingAddress', JSON.stringify(shippingAddress));
}

export const savePaymentMethod = (dispatch, paymentMethod) => {
  dispatch({
    type: SAVE_PAYMENT_METHOD,
    payload: paymentMethod.paymentMethod,
  });
}

export const feedJSONToFirebase = async (dispatch) => {
  dispatch({ type: BEGIN_PRODUCTS_FEED });
  try {
    await feedProducts();
    dispatch({ type: SUCCESS_PRODUCTS_FEED });
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_PRODUCTS_FEED, payload: error });
  }
}

export const setProductDetail = async (dispatch, productId, qty) => {
  dispatch({ type: BEGIN_PRODUCTS_REQUEST });
  try {
    const product = await getProductById(productId);
    if (qty === 0)
      dispatch({
        type: SET_PRODUCT_DETAIL,
        payload: {
          product,
        }
      })
    else
      dispatch({
        type: SET_PRODUCT_DETAIL,
        payload: {
          product,
          qty,
        }
      })
    dispatch({ type: SUCCESS_PRODUCTS_REQUEST });
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_PRODUCTS_REQUEST, payload: error });
  }
}

export const setPage = async (dispatch, url, title) => {
  let products = [];
  dispatch({ type: BEGIN_PRODUCTS_REQUEST });
  dispatch({
    type: SET_PAGE_TITLE,
    payload: title,
  });
  try {
    products = await getProducts(url);
    dispatch({
      type: SET_PAGE_CONTENT,
      payload: { title, products },
    });
    dispatch({
      type: SET_NAVBAR_ACTIVEITEM,
      payload: url,
    });
    dispatch({ type: SUCCESS_PRODUCTS_REQUEST });
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_PRODUCTS_REQUEST, payload: error });
  }
}

export const loginToFirebase = async (dispatch, userInfo) => {
  dispatch({ type: BEGIN_LOGIN_REQUEST });
  try {
    const user = await signInWithEmailPassword(userInfo.email, userInfo.password);
    dispatch({
      type: SUCCESS_LOGIN_REQUEST,
      payload: user.user.providerData[0],
    })
    return user;
  } catch (e) {
    dispatch({
      type: FAIL_LOGIN_REQUEST,
      payload: e.message
    })
    console.log(e)
    return null;
  }
}

export const rememberLoginUser = (dispatch, remember) => {
  dispatch({
    type: REMEMBER_LOGIN,
    payload: remember,
  })
}

export const registerToFirebase = async (dispatch, userInfo) => {
  dispatch({ type: BEGIN_REGISTER_REQUEST });
  try {
    const user = await registerWithEmailPassword(userInfo.email, userInfo.password, userInfo.name);
    console.log(user)
    dispatch({
      type: SUCCESS_REGISTER_REQUEST,
      payload: user.providerData[0],
    })
    return user;
  } catch (e) {
    dispatch({
      type: FAIL_REGISTER_REQUEST,
      payload: e.message
    })
    console.log(e)
    return null;
  }
}

export const updateUserInfo = async (dispatch, userInfo) => {
  dispatch({ type: BEGIN_UPDATE_USERINFO });
  try {
    const user = await updateUserInfoApi(
      userInfo.email,
      userInfo.password,
      userInfo.name
    );
    dispatch({
      type: SUCCESS_UPDATE_USERINFO,
      payload: user.providerData[0],
    });
  } catch (e) {
    dispatch({
      type: FAIL_UPDATE_USERINFO,
      payload: e.message,
    });
    console.log(e);
  }
};

export const logoutFromFirebase = async (dispatch) => {
  signOut();
  dispatch({ type: LOGOUT_REQUEST });
}

export const createOrder = async (dispatch, cart) => {
  dispatch({ type: BEGIN_ORDER_CREATE });
  try {
    const item = {
      orderItems: cart.cartItems,
      shippingAddress: cart.shippingAddress,
      paymentMethod: cart.paymentMethod,
      itemsPrice: cart.itemsPrice,
      shippingPrice: cart.shippingPrice,
      taxPrice: cart.taxPrice,
      totalPrice: cart.totalPrice,
    };    
    const orderInfo = await createOrderApi(item);
    dispatch({ 
      type: SUCCESS_ORDER_CREATE, 
      payload: orderInfo 
    });
    dispatch({ type: EMPTY_CART,})
    localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
    localStorage.removeItem("cartItems");
    return orderInfo;
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_ORDER_CREATE, payload: error });
    return null;
  }  
};

export const requestOrderDetail = async (dispatch, orderId) => {
  dispatch({ type: BEGIN_ORDER_DETAIL });
  try {
    const order = await getOrderById(orderId);
    dispatch({ 
      type: SUCCESS_ORDER_DETAIL,
      payload: order
    });
  } catch (error) {
    dispatch({ 
      type: FAIL_ORDER_DETAIL, 
      payload: error 
    });
  }
}

export const resetOrder = (dispatch) => {
  dispatch({ type: RESET_ORDER });
}

export const checkLogin = (dispatch) => {
  const isLogin = checkLoginApi();
  if(!isLogin) {
    localStorage.removeItem('orderInfo')
    dispatch({ type: LOGOUT_REQUEST });    
  }
  return isLogin;
}
