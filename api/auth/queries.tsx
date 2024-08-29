import { useMutation } from "@tanstack/react-query";
import { loginUser, logoutUser, registerUser } from "./fetchers";
import { TLoginPayload, TRegisterPayload } from "./types";
import { removeHeaderToken } from "@/providers/TanstackQueryClientProvider";
import { useToken } from "@/zustand/store";
import { useRouter } from "next/navigation";
import { useUserRole } from "../admin/queries";

export const useAuth = () => {
  const { setToken, deleteToken } = useToken((state) => state);
  const { data: dataRole, refetch } = useUserRole();
  const router = useRouter();
  const useLoginUser = () =>
    useMutation({
      mutationFn: (e: TLoginPayload) => loginUser(e),
      onSuccess: async (data) => {
        setToken(data.access_token);
        await refetch();
        if (dataRole.user === "admin") {
          router.push("admin/get-networks");
        } else {
          router.push("/wallet");
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
        router.push("/sign-in");
      },
    });

  return { useLoginUser, useLogoutUser, useRegisterUser };
};
