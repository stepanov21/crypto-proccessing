"use client";

import CopyWalletAdress from "@/components/custom/CopyWalletAdress";
import SelectNetwork from "@/components/custom/SelectNetwork";
import { Input } from "@/components/ui/input";
import { Title } from "@/components/ui/title";
import React from "react";

const page = () => {
  return (
    <div>
      <Title>Выберите сеть</Title>
      <SelectNetwork/>
      <Title className="mt-[30px]">Тип получения</Title>
      <Input className="mb-[30px]" placeholder="Крипто" disabled/>
      <CopyWalletAdress />
    </div>
  );
};

export default page;
