import { useQuery, useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/usersSlice";
import {
  getProductById,
  getProducts,
  getProductsByCategory,
  login,
  register,
  updateUserInfo,
  logout,
} from "../api";

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
  const { mutate, isLoading, isSuccess, isError, data, error, status } =
    useMutation(login, {
      onSuccess: (data) => {
        dispatch(
          setUser(data)
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
          setUser(data)
        );
      },
    });
  return { mutate, isLoading, isSuccess, isError, data, error, status };
};

export const useUpdateProfile = () => {
  const dispatch = useDispatch();
  const { mutate, isLoading, isSuccess, isError, data, error, status } =
    useMutation(updateUserInfo);
  return { mutate, isLoading, isSuccess, isError, data, error, status };
};

export const useLogout = () => {
  const dispatch = useDispatch();
  return useMutation(logout, {
    onSuccess: () => dispatch(setUser(null)),
  });
};
