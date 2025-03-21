import { useQuery, useMutation } from '@tanstack/react-query'
import { useDispatch } from "react-redux";
import { setUser } from '@/redux/usersSlice';
import { getProductById, getProducts, getProductsByCategory} from "@/api/fireStore";
import { signInWithEmailPassword, registerWithEmailPassword } from "@/api/fireAuth";

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
  const dispatch = useDispatch();
  const mutation = useMutation({
    mutationFn: signInWithEmailPassword,
    onSuccess: (data) => {
      dispatch(setUser(data));
    }
  });

  return mutation;
};

export const useRegisterWithEmailPassword = () => {
  const dispatch = useDispatch();
  const mutation = useMutation({
    mutationFn: registerWithEmailPassword,
    onSuccess: (data) => {
      dispatch(setUser(data));
    }
  });

  return mutation;
};