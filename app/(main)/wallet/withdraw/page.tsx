"use client";

import { IWithdrawPayload } from "@/api/wallets/fetchers";
import { useWithdraw } from "@/api/wallets/queries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Title } from "@/components/ui/title";
import React from "react";
import { useForm } from "react-hook-form";

const page = () => {
  const { register, handleSubmit } = useForm<IWithdrawPayload>();
  const { useWithdrawSend } = useWithdraw();

  return (
    <form
      onSubmit={handleSubmit((e) => useWithdrawSend.mutateAsync(e))}
      className="mt-10 max-w-[520px]"
    >
      <Title>Выберите кошелек</Title>
      <Input
        {...register("network")}
        defaultValue={"erc20"}
        className="mb-[30px] mt-2"
        placeholder="Выбрать крипто кошелек"
      />
      <Title>Передать</Title>
      <Input
        {...register("recipient_address")}
        defaultValue={"0x1Ae7da34846261c59f8A4D795F9F018A9e1FD6f6"}
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
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default page;
