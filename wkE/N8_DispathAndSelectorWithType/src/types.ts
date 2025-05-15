import type { Timestamp } from "firebase/firestore"; // firebase serverTimestamp 類型

export interface Product {
  id: string;
  category: string;
  name: string;
  sku: string;
  price: number;
  image: string;
  description: string;
  description_long: string;
  currency: string;
  countInStock: number;
}

export interface UserDoc {
  username: string;
  adrs: string;
  tel: string;
}

// 收藏品文件型態
export interface FavoriteDoc {
  id: string;
  productId: string;
  createdAt: Timestamp | null;
}

// getUserInfo 回傳的完整使用者資訊型態
export interface UserInfo extends Partial<UserDoc> {
  uid: string;
  email: string | null;
  favorites?: FavoriteDoc[];
}

// UpdateUserInfo 參數型態
// 這裡的 uid 是從 getUserInfo 取得的 uid
export interface UpdateUserInfoParams {
  username: string;
  adrs: string;
  tel: string;
  uid: string;
}

// 登入參數型態
export interface LoginInput {
  email: string;
  password: string;
  redirect?: string | null;
}

// 註冊參數型態
export interface RegisterInput {
  username: string;
  email: string;
  password: string;
  redirect?: string | null;
}

// Redux cartSlice 型態
export interface CartItem {
  id: string;
  name: string;
  qty: number;
  price: number;
  image: string;
  countInStock: number;
}

export interface ShippingAddress {
  fullName: string;
  adrs: string;
  city: string;
  postalCode: string;
  tel: string;
  country: string;
}

export interface PriceInfo {
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
}

export interface OrderData {
  orderId: string;
  userId: string;
  createdAt: string;
  cartItems: CartItem[];
  fullName: string;
  adrs: string;
  city: string;
  postalCode: string;
  tel: string;
  country: string;
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  paymentMethod: string;
}

export interface CartState {
  cartItems: CartItem[];
  shippingAddress: ShippingAddress;
  price: PriceInfo;
  paymentMethod: string;
  orderData: OrderData;
}
