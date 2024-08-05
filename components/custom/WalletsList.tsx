"use client";

import React from "react";
import WalletItem from "./WalletItem";
import { Title } from "../ui/title";
import { Button } from "../ui/button";
import { Plus, Search, X } from "lucide-react";
import { transformWalletsList } from "@/lib/utils";
import { useWallets } from "@/api/transaction/queries";
import { client } from "@/providers/TanstackQueryClientProvider";

const WalletsList = () => {
  const { data } = useWallets();
  const res = client.get("/auth/jwt/refresh").then(data => data.data);
  console.log(res);
  return (
    <div>
      <div className="flex">
        <Title className="mb-[18px] max-w-[200px] mr-auto">
          Балансы личных кошельков
        </Title>
        <Button variant={'wallet'} size={"icon"}>
          <Search size={20} />
        </Button>
        <Button className="ml-4" variant={'wallet'} size={"icon"}>
          <Plus size={24} />
        </Button>
      </div>
      <div className="purple-gradient mb-[30px] space-y-[30px] rounded-[18px] p-5 pt-10">
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
      <Button variant={"aside"}>Показать больше</Button>
    </div>
  );
};

export default WalletsList;
