"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const SelectPaymentVariant = () => {
  return (
    <Select onValueChange={(e) => console.log(e)}>
      <SelectTrigger className="h-[67px] w-full text-left">
        <SelectValue placeholder="Период" className="" />
      </SelectTrigger>
      <SelectContent className="items-start justify-start">
        <SelectItem className="flex flex-col font-medium" value="30">
          <div className="mb-2">Счет фактура</div>
          <div className="text-sm text-ourLightPurple">Для продажи товаров</div>
        </SelectItem>
        <SelectItem className="flex flex-col font-medium" value="31">
          <div className="mb-2">Статический кошелек </div>
          <div className="text-sm text-ourLightPurple">
            Для постоянного клиента
          </div>
        </SelectItem>
        <SelectItem className="flex flex-col font-medium" value="321">
          <div className="mb-2">Периодический платеж </div>
          <div className="text-sm text-ourLightPurple">За подписки</div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectPaymentVariant;
