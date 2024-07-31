'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const page = () => {
  return (
    <form className="max-w-[520px] mt-10 ">
      <Label>Выберите кошелек</Label>
      <Input className="mt-2 mb-[30px]" placeholder="Выбрать крипто кошелек" />
      <Label>Передать</Label>
      <Input className="mt-2 mb-[30px]" placeholder="Бизнес Кошелек" />
      <Label>Введите сумму для отправки</Label>
      <Input className="mt-2 roboto mb-[30px]" placeholder="1000 USDT" />
    </form>
  );
};

export default page;
