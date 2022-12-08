'use client'
import { useMutation } from '@tanstack/react-query'
import { useDispatch } from "react-redux";
import { setUser, logout } from '../redux/usersSlice';
import { signInWithEmailPassword, registerWithEmailPassword } from "../api";

export const useSignInWithEmailPassword = () => {
   const dispatch = useDispatch();
   const { mutate, isLoading, isSuccess, isError, data, error, status } = useMutation(signInWithEmailPassword, {
      onSuccess: (data) => {
         if(!!data?.access_token)
            dispatch(setUser(data))
         else
            dispatch(logout());
      }
   });
   return { mutate, isLoading, isSuccess, isError, data, error, status };
}

export const useRegisterWithEmailPassword = () => {
   const dispatch = useDispatch();
   const { mutate, isLoading, isSuccess, isError, data, error, status } = useMutation(registerWithEmailPassword, {
      onSuccess: (data) =>  {
         if(!!data?.access_token)
            dispatch(setUser(data))
         else
            dispatch(logout());
      }
   });
   return { mutate, isLoading, isSuccess, isError, data, error, status };
}
