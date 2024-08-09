"use client";

import { IWithdrawPayload } from "@/api/wallets/fetchers";
import { useWithdraw } from "@/api/wallets/queries";
import SelectNetwork from "@/components/custom/SelectNetwork";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Title } from "@/components/ui/title";
import React from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const { register, handleSubmit } = useForm<IWithdrawPayload>();
  const { useWithdrawSend } = useWithdraw();

  return (
    <form
      onSubmit={handleSubmit((e) => useWithdrawSend.mutateAsync(e))}
      className="mt-10 max-w-[520px]"
    >
      <Title>Выберите кошелек</Title>
      <SelectNetwork/>
      <Input
        {...register("network")}
        className="mb-[30px] mt-2"
        placeholder="Выбрать крипто кошелек"
      />
      <Title>Адресс</Title>
      <Input
        {...register("recipient_address")}
        className="mb-[30px] mt-2"
        placeholder="Бизнес Кошелек"
      />
      <Title>Введите сумму для отправки</Title>
      <Input
        {...register("amount")}
        type="number"
        className="roboto mb-[30px] mt-2"
        placeholder="1000 USDT"
      />
      <Button className="w-full" type="submit">Submit</Button>
    </form>
  );
};

export default Page;
