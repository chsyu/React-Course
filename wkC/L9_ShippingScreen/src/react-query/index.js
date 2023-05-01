import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getProductById,
  getProducts,
  getProductsByCategory,
  toggleFavoriteProduct,
  getUserInfo,
  login,
  register,
  updateUserInfo,
  logout,
} from "../api";

export const useProducts = () => {
  return useQuery([], getProducts);
};

export const useProductsByCategory = (category) => {
  return useQuery([category], getProductsByCategory);
};

export const useProductById = (productId) => {
  return useQuery([productId], getProductById);
};

export const useToggleFavoriteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(toggleFavoriteProduct, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(["uid"]);
    },
  });
};

export const useUserInfo = () => {
  return useQuery({
    queryKey: ["uid"],
    queryFn: getUserInfo,
    initialData: {},
  });
};

export const useSignInWithEmailPassword = () => {
  const queryClient = useQueryClient();
  return useMutation(login, {
    onSuccess: () => {
      queryClient.invalidateQueries(["uid"]);
    },
  });
};

export const useRegisterWithEmailPassword = () => {
  const queryClient = useQueryClient();
  return useMutation(register, {
    onSuccess: () => {
      queryClient.invalidateQueries(["uid"]);
    },
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation(updateUserInfo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["uid"]);
    },  
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation(logout, {
    onSuccess: () => {
      queryClient.invalidateQueries(["uid"]);
    },
  });
};
