import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/usersSlice";
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
    onSuccess: () => {
      queryClient.invalidateQueries(["uid"]);
    },
  });
};

export const useUserInfo = () => {
  const dispatch = useDispatch();
  return useQuery({
    queryKey: ["uid"],
    queryFn: getUserInfo,
    initialData: {},
    onSuccess: (data) => dispatch(setUser(data)),
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
  const dispatch = useDispatch();
  return useMutation(updateUserInfo, {
    onSuccess: (data) => dispatch(setUser(data)),
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  return useMutation(logout, {
    onSuccess: () => {
      queryClient.invalidateQueries(["uid"]);
      dispatch(setUser(null));
    },
  });
};
