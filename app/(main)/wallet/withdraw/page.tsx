import CopyWalletAdress from "@/components/custom/CopyWalletAdress";
import { Input } from "@/components/ui/input";
import { Title } from "@/components/ui/title";
import React from "react";

const page = () => {
  return (
    <div>
      <Title>Выберите кошелек</Title>
      <Input className="mb-[30px]" placeholder="Выбрать крипто кошелек" />
      <Title>Выберите сеть</Title>
      <Input className="mb-[30px]" placeholder="Выбрать сеть" />
      <Title>Тип получения</Title>
      <Input className="mb-[30px]" placeholder="Крипто" />
      <CopyWalletAdress />
    </div>
  );
};

export default page;
