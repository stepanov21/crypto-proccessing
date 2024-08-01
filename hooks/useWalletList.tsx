import WalletItem from "@/components/custom/WalletItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { ReactNode, useCallback, useMemo, useState } from "react";

const useWalletList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["total-balance"],
    queryFn: async () => {
      return await axios.get("https://app.neutronx.com/user/balance");
    },
  });

  return { walletList: data?.data };
};

export default useWalletList;
