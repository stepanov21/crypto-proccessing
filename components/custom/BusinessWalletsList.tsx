"use client";

import React from "react";
import WalletItem from "./WalletItem";
import { Title } from "../ui/title";
import { transformWalletsList } from "@/lib/utils";
import AddNewToken from "./AddNewToken";
import { useMerchant } from "@/api/merchant/queries";
import { useTranslations } from "next-intl";

const BusinessWalletsList = () => {
  const t = useTranslations("Aside");
  const { useBusinessWallets } = useMerchant();
  const { data } = useBusinessWallets();
  console.log("Бизнес кошель ");
  return (
    <div className="mt-0 sm:mt-8">
      <div className="flex">
        <Title className="mb-[18px] mr-auto max-w-[200px] sm:leading-normal">
          {t("business-wallets")}
        </Title>
        <AddNewToken />
      </div>
      <div className="purple-gradient mb-[30px] space-y-[30px] rounded-[18px] p-5 pt-10 dark:bg-ourGray dark:bg-none">
        {data &&
          transformWalletsList(data).map((wallet) => (
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

export default BusinessWalletsList;
