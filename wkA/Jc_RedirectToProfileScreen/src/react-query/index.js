import { useQuery, useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/usersSlice";
import { getProductById, getProducts, login, register } from "../api";

export const useProducts = (category) => {
  const { data, isLoading } = useQuery([category], getProducts);
  return { data, isLoading };
};

export const useProductById = (productId) => {
  const { data, isLoading } = useQuery([productId], getProductById);
  return { data, isLoading };
};

export const useSignInWithEmailPassword = () => {
  const dispatch = useDispatch();
  const { mutate, isLoading, isSuccess, isError, data, error, status } =
    useMutation(login, {
      onSuccess: (data) => {
        dispatch(
          setUser({
            accessToken: data?.accessToken,
            email: data?.email,
            photoURL: data?.photoURL,
            displayName: data?.displayName,
          })
        );
      },
    });
  return { mutate, isLoading, isSuccess, isError, data, error, status };
};

export const useRegisterWithEmailPassword = () => {
  const dispatch = useDispatch();
  const { mutate, isLoading, isSuccess, isError, data, error, status } =
    useMutation(register, {
      onSuccess: (data) => {
        dispatch(
          setUser({
            accessToken: data?.accessToken,
            email: data?.email,
            photoURL: data?.photoURL,
            displayName: data?.displayName,
          })
        );
      },
    });
  return { mutate, isLoading, isSuccess, isError, data, error, status };
};
