import { useMutation } from "@tanstack/react-query";
import { loginUser, logoutUser, registerUser } from "./fetchers";
import { TLoginPayload, TRegisterPayload } from "./types";
import { removeHeaderToken } from "@/providers/TanstackQueryClientProvider";
import { useToken } from "@/zustand/store";

export const useAuth = () => {
  const {setToken, deleteToken} = useToken(state => state)
  const useLoginUser = useMutation({
    mutationFn: (e: TLoginPayload) => loginUser(e),
    onSuccess: (data) => {
      setToken(data.access_token)
    }
  });

  const useLogoutUser = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      console.log('success logout')
      deleteToken()
    },
  });

  const useRegisterUser = useMutation({
    mutationFn: (e: TRegisterPayload) => registerUser(e),
  });

  return { useLoginUser, useLogoutUser, useRegisterUser };
};
