"use client";

import React from "react";
import WalletItem from "./WalletItem";
import { Title } from "../ui/title";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { transformWalletsList } from "@/lib/utils";
import { useWallets } from "@/api/transaction/queries";
import AddNewToken from "./AddNewToken";
import { useTranslations } from "next-intl";

const WalletsList = () => {
  const t = useTranslations("Aside");
  const { data } = useWallets();
  return (
    <div className="mt-0 sm:mt-8">
      <div className="flex">
        <Title className="mb-[18px] mr-auto max-w-[200px] sm:leading-normal">
          {t("wallets")}
        </Title>
        <AddNewToken />
      </div>
      <div className="purple-gradient mb-[30px] space-y-[30px] rounded-[18px] p-5 pt-10 dark:bg-ourGray dark:bg-none">
        {data?.balances &&
          transformWalletsList(data?.balances).map((wallet) => (
            <WalletItem
              balance={wallet.balance}
              key={wallet.id}
              icon={wallet.icon}
            >
              {wallet.name}
            </WalletItem>
          ))}
      </div>
    </div>
  );
};

export default WalletsList;
