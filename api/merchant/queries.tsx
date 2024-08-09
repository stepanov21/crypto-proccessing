import { useMutation, useQuery } from "@tanstack/react-query";
import { addMerchant, IMerchantInvoice, merchantGetInvoice, merchantPostInvoice, merchantTransfer } from "./fetchers";
import { ITransferPayload } from "../transaction/types";

export const useMerchant = () => {
  const useAddMerchant = useMutation({
    mutationFn: (e: {name: string}) => addMerchant(e),
  });
  const useMerchantTransfer = useMutation({
    mutationFn: (e: ITransferPayload) => merchantTransfer(e),
  });

  const useMerchantPostInvoice = () => useMutation({
    mutationFn: (e: IMerchantInvoice) => merchantPostInvoice(e),
  });

  const useMerchantGetInvoice = () => useQuery({queryKey: ['merchant-invoice'], queryFn: () => merchantGetInvoice()})

  return { useAddMerchant, useMerchantTransfer, useMerchantGetInvoice, useMerchantPostInvoice };
};
