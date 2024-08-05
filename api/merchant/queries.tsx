import { useMutation } from "@tanstack/react-query";
import { addMerchant } from "./fetchers";

export const useMerchant = () => {
  const useAddMerchant = useMutation({
    mutationFn: (e: {name: string}) => addMerchant(e),
  });

  return { useAddMerchant };
};
