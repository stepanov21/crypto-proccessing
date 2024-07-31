"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "../ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { ArrowDownToLine, ChevronDown, Search } from "lucide-react";

const TransactionFilters = () => {
  return (
    <div className="flex items-center gap-3">
      <Select onValueChange={(e) => console.log(e)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Период" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="30">30 дней</SelectItem>
          <SelectItem value="7">7 дней</SelectItem>
          <SelectItem value="1">1 день </SelectItem>
        </SelectContent>
      </Select>
      <Popover>
        <PopoverTrigger asChild>
          <Button className=" rounded-[18px] border-[1px] border-white bg-transparent text-white px-4 h-[50px] flex justify-between w-[180px]">Тип транзакций<ChevronDown className="ml-auto"/></Button>
        </PopoverTrigger>
        <PopoverContent className="pt-0">
        <div className="w-[185px] p-2.5 bg-[#252032] rounded-[10px] space-y-4 text-md text-white border-[1px] border-[#37304B]">
        <div className="flex items-center justify-between space-x-2">
          <label
            htmlFor="1"
            className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Отправленные
          </label>
          <Checkbox id="1" />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <label
            htmlFor="2"
            className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Полученные
          </label>
          <Checkbox id="2" />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <label
            htmlFor="3"
            className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Ошибочные
          </label>
          <Checkbox id="3" />
        </div>
      </div>
        </PopoverContent>
      </Popover>
      <Button className="px-5 w-min ml-auto flex gap-2.5" variant={'aside'}><Search size={20} />Найти транзакцию</Button>
      <Button className="px-5 w-min flex  gap-2.5" variant={'aside'}><ArrowDownToLine size={20}/>Скачать</Button>
      <div className="h-6 border-b-[1px] border-b-ourLightPurple"></div>
    </div>
  );
};

export default TransactionFilters;
