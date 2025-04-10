import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getProductById, getProducts, getProductsByCategory} from "@/api/fireStore";
import { login, register } from "@/api/fireAuth";

export const useProducts = () => {
   return useQuery({
    queryKey: ['products'], 
    queryFn: getProducts
  });
 };
 
 export const useProductsByCategory = (category) => {
    return useQuery({
      queryKey: [category], 
      queryFn: getProductsByCategory
    });
  };
 
 export const useProductById = (productId) => {
   return useQuery({
    queryKey: [productId], 
    queryFn: getProductById
  });
 };


 export const useSignInWithEmailPassword = () => {
  return useMutation({
    mutationFn: login,
  });
};

export const useRegisterWithEmailPassword = () => {
  return useMutation({
    mutationFn: register,
  });
};
