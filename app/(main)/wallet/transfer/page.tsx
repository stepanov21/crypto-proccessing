"use client";

import { ITransferPayload } from "@/api/transaction/types";
import SelectWallet from "@/components/custom/SelectWallet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Title } from "@/components/ui/title";
import { client } from "@/providers/TanstackQueryClientProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const page = () => {
  const { register, handleSubmit } = useForm();

  const { data } = useQuery({
    queryKey: ["total-balance"],
    queryFn: () => {
      return client.get("https://app.neutronx.com/user/balance");
    },
  });

  const mutation = useMutation({
    mutationFn: (body: ITransferPayload) => {
      return client.post(
        "/merchant/transfer",
        {
          token_field: body.token_field,
          amount: +body.amount,
          wallet_type: body.wallet_type,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    },
    onSuccess: (data) => {
      // Invalidate and refetch
      console.log("Перевод оправлен", data);
    },
  });

  return (
    <div>
      <form
        onSubmit={handleSubmit((e) => mutation.mutate(e as ITransferPayload))}
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
          className="roboto mb-[30px] mt-2"
          placeholder="1000 USDT"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default page;
