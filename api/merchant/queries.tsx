import { useMutation } from "@tanstack/react-query";
import { addMerchant, merchantTransfer } from "./fetchers";
import { ITransferPayload } from "../transaction/types";

export const useMerchant = () => {
  const useAddMerchant = useMutation({
    mutationFn: (e: {name: string}) => addMerchant(e),
  });
  const useMerchantTransfer = useMutation({
    mutationFn: (e: ITransferPayload) => merchantTransfer(e),
  });

  return { useAddMerchant, useMerchantTransfer };
};
