import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import useWalletList from "@/hooks/useWalletList";
import WalletItem from "./WalletItem";
import { transformWalletsList } from "@/lib/utils";

const SelectWallet = ({ register }: { register: any }) => {
  const { walletList } = useWalletList();
  return (
    <Select onValueChange={(e) => register("token_field", { value: e })}>
      <SelectTrigger className="h-[60px] w-full">
        <SelectValue placeholder="Выбрать крипто кошелек" />
      </SelectTrigger>
      <SelectContent>
        {transformWalletsList(walletList).map((wallet) => {
          return (
            <SelectItem value={wallet.id}>
              <WalletItem balance={wallet.balance} icon={wallet.icon}>
                {wallet.id}
              </WalletItem>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default SelectWallet;
