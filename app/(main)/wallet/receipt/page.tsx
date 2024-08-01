"use client";

import SelectPaymentVariant from "@/components/custom/SelectPaymentVariant";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const page = () => {
  return (
    <form className="mt-10 max-w-[520px]">
      <Label>Выберите кошелек</Label>
      <Input className="mb-[30px] mt-2" placeholder="Выбрать крипто кошелек" />
      <Label>Передать</Label>
      <Input className="mb-[30px] mt-2" placeholder="Бизнес Кошелек" />
      <Label>Введите сумму для отправки</Label>
      <Input className="roboto mb-[30px] mt-2" placeholder="1000 USDT" />
    </form>
  );
};

export default page;
