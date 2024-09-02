import { useMutation } from "@tanstack/react-query";
import { loginUser, logoutUser, registerUser } from "./fetchers";
import { TLoginPayload, TRegisterPayload } from "./types";
import { removeHeaderToken } from "@/providers/TanstackQueryClientProvider";
import { useToken } from "@/zustand/store";
import { useRouter } from "next/navigation";
import { useUserRole } from "../admin/queries";

export const useAuth = () => {
  const { setToken, deleteToken } = useToken((state) => state);
  const { refetch } = useUserRole();
  const router = useRouter();
  const useLoginUser = () =>
    useMutation({
      mutationFn: (e: TLoginPayload) => loginUser(e),
      onSuccess: async (data) => {
        setToken(data.access_token);
        const res = await refetch();
        console.log(res.data.user);
        if (res.data.user === "admin") {
          router.push("/en/admin/get-networks");
        } else {
          router.push("/en/wallet");
        }
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
        router.push("/en/sign-in");
      },
    });

  return { useLoginUser, useLogoutUser, useRegisterUser };
};
