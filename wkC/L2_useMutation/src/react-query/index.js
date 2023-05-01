import { useQuery, useMutation } from "@tanstack/react-query";
import { getProductById, getProducts, getProductsByCategory, login, register } from "../api";

export const useProducts = () => {
  return useQuery([], getProducts);
};

export const useProductsByCategory = (category) => {
   return useQuery([category], getProductsByCategory);
 };

export const useProductById = (productId) => {
  return useQuery([productId], getProductById);
};

export const useSignInWithEmailPassword = () => {
  return useMutation(login);
};

export const useRegisterWithEmailPassword = () => {
  return useMutation(register);
};

