import { useMutation, useQuery } from "@tanstack/react-query";
import { getDowloadTransactions, getMyTransaction, getMyWallet, IWithdrawPayload, sendWithdraw } from "./fetchers";
import { queryClient } from "@/providers/TanstackQueryClientProvider";

export const useGetMyWallets = (network: string) =>
  useQuery({
    queryKey: ["wallets", [network]],
    queryFn: () => getMyWallet(network),
  });

export const useGetMyTransaction = () =>
  useQuery({
    queryKey: ["my-transaction"],
    queryFn: getMyTransaction,
  });

export const useGetDownloadTransaction = () =>
  useQuery({
    queryKey: ["my-transaction"],
    queryFn: getDowloadTransactions,
  });

export const useWithdraw = () => {
  const useWithdrawSend = useMutation({
    mutationFn: (e: IWithdrawPayload) => sendWithdraw(e),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['wallets'] })
  });

  return { useWithdrawSend };
};
