import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { transformWalletsList } from "@/lib/utils";
import { useWallets } from "@/api/transaction/queries";
import Image from "next/image";
import { useMerchant } from "@/api/merchant/queries";
import { useTranslations } from "next-intl";

const SelectBusinessWallet = ({ setValue }: { setValue: any }) => {
  const t = useTranslations("Transfer");
  const { useBusinessWallets } = useMerchant();
  const { data: businessData } = useBusinessWallets();

  return (
    <Select
      onValueChange={(e) => {
        setValue("token_field", e);
        console.log(e);
        if (e.endsWith("trc")) {
          setValue("wallet_type", "trc");
        } else {
          setValue("wallet_type", "erc");
        }
      }}
    >
      <SelectTrigger className="h-[60px] w-full sm:h-[50px]">
        <SelectValue placeholder={t("1st select")} />
      </SelectTrigger>
      <SelectContent>
        {businessData &&
          transformWalletsList(businessData).map((wallet) => {
            return (
              <SelectItem className="" value={wallet.id} key={wallet.id}>
                <div className="flex min-w-[200px] justify-between gap-4">
                  <div className="relative">
                    <Image
                      src={"/USDT.svg"}
                      width={40}
                      height={40}
                      alt="usdt"
                    />
                    <Image
                      className="absolute bottom-0 right-0"
                      src={`/wallet-icons/${wallet.icon}.svg`}
                      width={16}
                      height={16}
                      alt="wallet"
                    />
                  </div>
                  <div className="mr-auto flex flex-col items-start gap-2">
                    <span className="text-[18px]">
                      {wallet.name === "Eth" ? "ETH" : "USDT"}
                    </span>
                    <span className="text-ourLightPurple">{wallet.name}</span>
                  </div>
                  <div className="roboto flex flex-col items-end gap-2 font-medium">
                    <span>$ {wallet.balance}</span>
                    <span>0.00</span>
                  </div>
                </div>
              </SelectItem>
            );
          })}
      </SelectContent>
    </Select>
  );
};

export default SelectBusinessWallet;
