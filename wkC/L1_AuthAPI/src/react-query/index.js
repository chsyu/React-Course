import { useQuery, useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/usersSlice";
import {
  getProductById,
  getProducts,
  getProductsByCategory,
} from "@/api/fireStore";
import { login, register } from "@/api/fireAuth";

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

export const useSignInWithEmailPassword = () => {};

export const useRegisterWithEmailPassword = () => {};
