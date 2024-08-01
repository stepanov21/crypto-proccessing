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
    <>
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
            <Button className="flex h-[50px] w-[180px] justify-between rounded-[18px] border-[1px] border-white bg-transparent px-4 text-white">
              Тип транзакций
              <ChevronDown className="ml-auto" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="pt-0">
            <div className="text-md w-[185px] space-y-4 rounded-[10px] border-[1px] border-[#37304B] bg-[#252032] p-2.5 text-white">
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
        <Button className="ml-auto flex w-min gap-2.5 px-5" variant={"aside"}>
          <Search size={20} />
          Найти транзакцию
        </Button>
        <Button className="flex w-min gap-2.5 px-5" variant={"aside"}>
          <ArrowDownToLine size={20} />
          Скачать
        </Button>
      </div>
      <div className="mb-10 h-4 w-full border-b-[1px] border-b-ourLightPurple"></div>
    </>
  );
};

export default TransactionFilters;
