import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addMerchant,
  getAllMerchants,
  IMerchantInvoice,
  merchantGetBusinessWallet,
  merchantGetInvoice,
  merchantGetInvoiceById,
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

  const useMerchantGetInvoice = (page: number = 1) =>
    useQuery({
      queryKey: ["merchant-invoice", page],
      queryFn: () => merchantGetInvoice(page),
    });

  const useMerchantGetInvoiceById = (id: string) =>
    useQuery({
      queryKey: ["merchant-invoice", id],
      queryFn: () => merchantGetInvoiceById(id),
      refetchInterval: 10000,
      retry: 0,
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
    useMerchantGetInvoiceById,
    useMerchantPostInvoice,
    useBusinessWallets,
    useAllMerchants,
  };
};
