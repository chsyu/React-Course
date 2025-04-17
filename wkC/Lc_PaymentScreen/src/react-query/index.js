import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import {
  getProductById,
  getProducts,
  getProductsByCategory,
  getUserInfo,
  updateUserInfo,
  toggleFavorite,
} from "@/api/fireStore";
import { login, register, logout } from "@/api/fireAuth";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

export const useProductsByCategory = (category) => {
  return useQuery({
    queryKey: [category],
    queryFn: getProductsByCategory,
  });
};

export const useProductById = (productId) => {
  return useQuery({
    queryKey: [productId],
    queryFn: getProductById,
  });
};

export const useSignInWithEmailPassword = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: login,
    onSuccess: (_, variables) => {
      const { redirect } = variables || {};
      queryClient.invalidateQueries(["userInfo"]);
      // Redirect to the specified path after successful login
      if (redirect) {
        navigate(redirect);
      } else {
        navigate("/");
      }
    },
  });
};

export const useRegisterWithEmailPassword = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: register,
    onSuccess: (_, variables) => {
      const { redirect } = variables;
      queryClient.invalidateQueries(["userInfo"]);
      // Redirect to the specified path after successful login
      if (redirect) {
        navigate(redirect);
      } else {
        navigate("/");
      }
    },
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUserInfo,
    onSuccess: () => {
      queryClient.invalidateQueries(["userInfo"]);
    },
  });
};

export const useUserInfo = () => {
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
    initialData: {},
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries(["userInfo"]);
      navigate("/auth/login");
    },
  });
};

export const useToggleFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleFavorite,
    onSuccess: (_, { productId }) => {
      // 🎯 成功後可重新抓取商品快取或排行榜
      queryClient.invalidateQueries(['product', productId]);
      queryClient.invalidateQueries(['favorites', 'ranking']);
    },
    onError: (error) => {
      console.error('收藏失敗', error);
    },
  });
};
