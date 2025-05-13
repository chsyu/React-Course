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

// 收藏品文件格式
export interface FavoriteDoc {
  id: string;
  productId: string;
  createdAt: Timestamp | null; // serverTimestamp() 回傳的是 Timestamp，讀取時可能為 null
}

// getUserInfo 回傳的完整使用者資訊型態
export interface UserInfo extends Partial<UserDoc> {
  uid: string;
  email: string | null;
  favorites: FavoriteDoc[];
}

// UpdateUserInfo 參數型態
// 這裡的 uid 是從 getUserInfo 取得的 uid
export interface UpdateUserInfoParams {
  username: string;
  adrs: string;
  tel: string;
  uid: string;
}
