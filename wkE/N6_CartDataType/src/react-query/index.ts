import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { FirebaseError } from "firebase/app";
import {
  getProductById,
  getProducts,
  getProductsByCategory,
  getUserInfo,
  updateUserInfo,
  toggleFavorite,
  createOrder,
} from "@/api/fireStore";
import { login, register, logout } from "@/api/fireAuth";
import { saveOrderData, removeAllCartItems } from "@/redux/cartSlice";
import type { Product, UserInfo, UpdateUserInfoParams, LoginInput, RegisterInput } from "@/types";

const initialUserInfo: UserInfo = {
  uid: '',
  email: null,
  username: '',
  adrs: '',
  tel: '',
  favorites: [],
};

export const useProducts = () => {
  return useQuery<Product[], FirebaseError>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

export const useProductsByCategory = (category) => {
  return useQuery<Product[], FirebaseError>({
    queryKey: [category],
    queryFn: getProductsByCategory,
  });
};

export const useProductById = (productId) => {
  return useQuery<Product, FirebaseError>({
    queryKey: [productId],
    queryFn: getProductById,
  });
};

export const useSignInWithEmailPassword = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation<void, FirebaseError, LoginInput>({
    mutationFn: login,
    onSuccess: (_, variables) => {
      const redirect = variables?.redirect;
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
      navigate(redirect || "/");
    },
  });
};

export const useRegisterWithEmailPassword = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation<void, FirebaseError, RegisterInput>({
    mutationFn: register,
    onSuccess: (_, variables) => {
      const redirect = variables?.redirect;
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
      navigate(redirect || "/");
    },
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation<void, FirebaseError, UpdateUserInfoParams>({
    mutationFn: updateUserInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
    },
  });
};

export const useUserInfo = () => {
  return useQuery<UserInfo, FirebaseError>({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
    initialData: initialUserInfo,
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["userInfo"] });
      navigate("/auth/login");
    },
  });
};

export const useToggleFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleFavorite,
    onSuccess: (_, { productId }: { productId: string }) => {
      // 成功後可重新抓取商品快取或排行榜
      queryClient.invalidateQueries({ queryKey: ["product", productId] });
      queryClient.invalidateQueries({ queryKey: ["favorites", "ranking"] });
    },
    onError: (error) => {
      console.error("收藏失敗", error);
    },
  });
};

export function useCreateOrder() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createOrder,
    onSuccess: ({ orderData }) => {
      dispatch(removeAllCartItems());
      dispatch(saveOrderData(orderData));
      navigate("/shopping/order");
    },
    onError: (err) => {
      alert("下單失敗", err);
    },
  });
}
