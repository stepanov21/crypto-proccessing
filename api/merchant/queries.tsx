import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addMerchant,
  getAllMerchants,
  IMerchantInvoice,
  merchantGetBusinessWallet,
  merchantGetInvoice,
  merchantPostInvoice,
  merchantTransferBusinessToOwn,
  merchantTransferOwnToBusiness,
} from "./fetchers";
import { ITransferPayload } from "../transaction/types";
import { useRouter } from "next/navigation";
import { queryClient } from "@/providers/TanstackQueryClientProvider";

export const useMerchant = () => {
  const router = useRouter();
  const useAddMerchant = () =>
    useMutation({
      mutationFn: (e: { name: string }) => addMerchant(e),
    });
  const useMerchantTransferOwnToBusiness = () =>
    useMutation({
      mutationFn: (e: ITransferPayload) => merchantTransferOwnToBusiness(e),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["walletsAll"] });
      },
    });

  const useMerchantTransferBusinessToOwn = () =>
    useMutation({
      mutationFn: (e: ITransferPayload) => merchantTransferBusinessToOwn(e),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["business-wallet"] });
      },
    });

  const useAllMerchants = () =>
    useQuery({ queryKey: ["merchants"], queryFn: getAllMerchants });

  const useMerchantPostInvoice = () =>
    useMutation({
      mutationFn: (e: IMerchantInvoice) => merchantPostInvoice(e),
      onSuccess: () => router.push("/business-wallet"),
    });

  const useMerchantGetInvoice = () =>
    useQuery({
      queryKey: ["merchant-invoice"],
      queryFn: () => merchantGetInvoice(),
    });
  const useBusinessWallets = () =>
    useQuery({
      queryKey: ["business-wallet"],
      queryFn: () => merchantGetBusinessWallet(),
    });

  return {
    useAddMerchant,
    useMerchantTransferOwnToBusiness,
    useMerchantTransferBusinessToOwn,
    useMerchantGetInvoice,
    useMerchantPostInvoice,
    useBusinessWallets,
    useAllMerchants,
  };
};
