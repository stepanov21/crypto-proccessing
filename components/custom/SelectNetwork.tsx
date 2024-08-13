import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const SelectNetwork = ({ register }: { register?: any }) => {
  return (
    <Select
      onValueChange={(value) => {
        console.log(value);
        register("network", { value });
      }}
    >
      <SelectTrigger className="h-[60px] w-full">
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
