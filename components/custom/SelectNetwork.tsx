import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const SelectNetwork = () => {
  return (
    <Select>
      <SelectTrigger className="h-[60px] w-full">
        <SelectValue placeholder="Выбрать сеть" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Arbitrum">Arbitrum</SelectItem>
        <SelectItem value="Polygon">Polygon</SelectItem>
        <SelectItem value="Tron">Tron</SelectItem>
        <SelectItem value="Avalanche">Avalanche</SelectItem>
        <SelectItem value="BnB Chain">BnB Chain</SelectItem>
        <SelectItem value="Kava">Kava</SelectItem>
        <SelectItem value="Optimism">Optimism</SelectItem>
        <SelectItem value="Solana">Solana</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectNetwork;
