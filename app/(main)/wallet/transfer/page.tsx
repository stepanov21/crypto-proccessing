"use client";

import { useMerchant } from "@/api/merchant/queries";
import { ITransferPayload } from "@/api/transaction/types";
import SelectWallet from "@/components/custom/SelectWallet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Title } from "@/components/ui/title";
import React from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const { register, handleSubmit } = useForm();

  const { useMerchantTransfer } = useMerchant()

  return (
    <div>
      <form
        onSubmit={handleSubmit((e) => useMerchantTransfer.mutateAsync(e as ITransferPayload))}
        className="mt-10 max-w-[520px]"
      >
        <Title>Выберите кошелек</Title>
        <SelectWallet register={register} />
        <Title className="mt-[30px]">Передать</Title>
        <Input
          {...register("wallet_type")}
          className="mb-[30px] mt-2"
          placeholder="Бизнес Кошелек"
        />
        <Title>Введите сумму для отправки</Title>
        <Input
          {...register("amount")}
          type='number'
          className="roboto mb-[30px] mt-2"
          placeholder="1000 USDT"
        />
        <Button className="w-full" type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Page;
