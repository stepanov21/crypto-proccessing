import { useMutation } from "@tanstack/react-query";
import { loginUser, logoutUser, registerUser } from "./fetchers";
import { TLoginPayload, TRegisterPayload } from "./types";
import { removeHeaderToken } from "@/providers/TanstackQueryClientProvider";
import { useToken } from "@/zustand/store";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const { setToken, deleteToken } = useToken((state) => state);
  const router = useRouter();
  const useLoginUser = () =>
    useMutation({
      mutationFn: (e: TLoginPayload) => loginUser(e),
      onSuccess: (data) => {
        setToken(data.access_token);
        router.push("/wallet");
      },
    });

  const useLogoutUser = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      console.log("success logout");
      deleteToken();
    },
  });

  const useRegisterUser = () =>
    useMutation({
      mutationFn: (e: TRegisterPayload) => registerUser(e),
      onSuccess: () => {
        router.push("/sign-in");
      }
    });

  return { useLoginUser, useLogoutUser, useRegisterUser };
};
