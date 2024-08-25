"use client";

import CopyWalletAdress from "@/components/custom/CopyWalletAdress";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Title } from "@/components/ui/title";
import React, { useState } from "react";

const Page = () => {
  const [network, setNetwork] = useState<"erc20" | "trc20">("erc20");
  return (
    <div>
      <Title>Выберите сеть</Title>
      <Select
        onValueChange={(value: any) => {
          if (value === "trc") {
            setNetwork("trc20");
          } else {
            setNetwork("erc20");
          }
        }}
      >
        <SelectTrigger className="h-[60px] w-full sm:h-[50px]">
          <SelectValue placeholder="Выбрать сеть" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="erc">Erc</SelectItem>
          <SelectItem value="trc">Trc</SelectItem>
          <SelectItem value="arb">Arbitrum</SelectItem>
          <SelectItem value="polygon">Polygon</SelectItem>
          {/* <SelectItem value="Tron">Tron</SelectItem> */}
          {/* <SelectItem value="Avalanche">Avalanche</SelectItem> */}
          <SelectItem value="bep">BnB Chain</SelectItem>
          {/* <SelectItem value="Kava">Kava</SelectItem> */}
          <SelectItem value="optimism">Optimism</SelectItem>
        </SelectContent>
      </Select>
      <Title className="mt-[30px]">Тип получения</Title>
      <Input className="mb-[30px]" placeholder="Крипто" disabled />
      <CopyWalletAdress network={network} />
    </div>
  );
};

export default Page;
