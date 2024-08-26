import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { UseFormSetValue } from "react-hook-form";
import { IWithdrawPayload } from "@/api/wallets/fetchers";

const SelectNetwork = ({ setValue }: { setValue: any }) => {
  return (
    <Select
      onValueChange={(e) => {
        setValue("network", e);
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
  );
};

export default SelectNetwork;
