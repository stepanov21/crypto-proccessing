import { useMutation, useQuery } from "@tanstack/react-query";
import { getMyWallet, IWithdrawPayload, sendWithdraw } from "./fetchers";

export const useGetMyWallets = (network: string) =>
  useQuery({
    queryKey: ["wallets", [network]],
    queryFn: () => getMyWallet(network),
  });

export const useWithdraw = () => {
  const useWithdrawSend = useMutation({
    mutationFn: (e: IWithdrawPayload) => sendWithdraw(e),
  });

  return { useWithdrawSend };
};
