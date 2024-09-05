import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getDowloadTransactions,
  getMyTransaction,
  getMyWallet,
  IWithdrawPayload,
  sendWithdraw,
} from "./fetchers";
import { queryClient } from "@/providers/TanstackQueryClientProvider";

export const useGetMyWallets = (network: string) =>
  useQuery({
    queryKey: ["wallets", [network]],
    queryFn: () => getMyWallet(network),
  });

export const useGetMyTransaction = ({
  page = 1,
  period = "30d",
}: {
  page: number;
  period: "1d" | "7d" | "30d";
}) =>
  useQuery({
    queryKey: ["my-transaction", [page, period]],
    queryFn: () => getMyTransaction({ page, period }),
  });

export const useGetDownloadTransaction = () =>
  useQuery({
    queryKey: ["my-transaction"],
    queryFn: getDowloadTransactions,
    retry: 2,
  });

export const useWithdraw = () => {
  const useWithdrawSend = () =>
    useMutation({
      mutationFn: (e: IWithdrawPayload) => sendWithdraw(e),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ["wallets"] }),
    });

  return { useWithdrawSend };
};
