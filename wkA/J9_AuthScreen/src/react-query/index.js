import { useQuery } from "@tanstack/react-query";
import {
  getProductById,
  getProducts,
  getProductsByCategory,
} from "@/api/fireStore";

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