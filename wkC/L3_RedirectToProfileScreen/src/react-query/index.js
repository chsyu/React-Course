import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router';
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
  const navigate = useNavigate();
  return useMutation({
    mutationFn: login,
    onSuccess: (_, variables) => {
      const { redirect } = variables || {};
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
  const navigate = useNavigate();
  return useMutation({
    mutationFn: register,
    onSuccess: (_, variables) => {
      const { redirect } = variables;
      // Redirect to the specified path after successful login
      if (redirect) {
        navigate(redirect);
      } else {
        navigate("/");
      }
    },
  });
};