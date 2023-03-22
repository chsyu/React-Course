import { useQuery, useMutation } from '@tanstack/react-query'
import { useDispatch } from "react-redux";
import { setUser } from '../redux/usersSlice';
import { getProductById, getProducts, getProductsByCategory, signInWithEmailPassword, registerWithEmailPassword} from "../api";

export const useProducts = () => {
   const { data, isLoading } = useQuery([], getProducts);
   return { data, isLoading };
 };
 
 export const useProductsByCategory = (category) => {
    const { data, isLoading } = useQuery([category], getProductsByCategory);
    return { data, isLoading };
  };
 
 export const useProductById = (productId) => {
   const { data, isLoading } = useQuery([productId], getProductById);
   return { data, isLoading };
 };

 export const useSignInWithEmailPassword = () => {
  const dispatch = useDispatch();
  const { mutate, isLoading, isSuccess, isError, data, error, status } = useMutation(signInWithEmailPassword, {
     onSuccess: (data) =>{
      console.log({data})
      dispatch(setUser(data))}
  });
  return { mutate, isLoading, isSuccess, isError, data, error, status };
}

export const useRegisterWithEmailPassword = () => {
  const dispatch = useDispatch();
  const { mutate, isLoading, isSuccess, isError, data, error, status } = useMutation(registerWithEmailPassword, {
     onSuccess: (data) => dispatch(setUser(data))
  });
  return { mutate, isLoading, isSuccess, isError, data, error, status };
}