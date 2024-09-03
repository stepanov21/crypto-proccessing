import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useTranslations } from "next-intl";

const SelectNetwork = ({
  setValue,
  setNetwork,
}: {
  setValue: any;
  setNetwork?: any;
}) => {
  const t = useTranslations("Withdraw");
  return (
    <Select
      onValueChange={(e) => {
        setValue("network", e);
        if (setNetwork) setNetwork(e);
      }}
    >
      <SelectTrigger className="h-[60px] w-full sm:h-[50px]">
        <SelectValue placeholder={t("1st select")} />
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
