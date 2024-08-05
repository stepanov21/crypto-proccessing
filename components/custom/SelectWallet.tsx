import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import WalletItem from "./WalletItem";
import { transformWalletsList } from "@/lib/utils";
import { useWallets } from "@/api/transaction/queries";

const SelectWallet = ({ register }: { register: any }) => {
  const { data, isError } = useWallets();

  return (
    <Select onValueChange={(e) => register("token_field", { value: e })}>
      <SelectTrigger className="h-[60px] w-full">
        <SelectValue placeholder="Выбрать крипто кошелек" />
      </SelectTrigger>
      <SelectContent>
        {data && transformWalletsList(data).map((wallet) => {
          return (
            <SelectItem value={wallet.id} key={wallet.id}>
              <WalletItem balance={wallet.balance} icon={wallet.icon}>
                {wallet.name}
              </WalletItem>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default SelectWallet;
