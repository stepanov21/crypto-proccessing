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
import React from "react";

const page = () => {
  return (
    <div>
      <Title>Выберите сеть</Title>
      <Select
        onValueChange={(value) => {
          console.log(value);
        }}
      >
        <SelectTrigger className="h-[60px] w-full">
          <SelectValue placeholder="Выбрать сеть" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="erc">Erc</SelectItem>
          <SelectItem value="trc">Trc</SelectItem>
        </SelectContent>
      </Select>
      <Title className="mt-[30px]">Тип получения</Title>
      <Input className="mb-[30px]" placeholder="Крипто" disabled />
      <CopyWalletAdress />
    </div>
  );
};

export default page;
