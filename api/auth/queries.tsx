import { useMutation } from "@tanstack/react-query";
import {
  loginUser,
  logoutUser,
  registerUser
} from "./fetchers";
import { TLoginPayload, TRegisterPayload } from "./types";

export const useAuth = () => {
  const useLoginUser = useMutation({
    mutationFn: (e: TLoginPayload) => loginUser(e),
  });

  const useLogoutUser = useMutation({ mutationFn: logoutUser });

  const useRegisterUser = useMutation({
    mutationFn: (e: TRegisterPayload) => registerUser(e),
  });

  return { useLoginUser, useLogoutUser, useRegisterUser };
};
