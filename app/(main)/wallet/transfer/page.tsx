"use client";

import SelectWallet from "@/components/custom/SelectWallet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Title } from "@/components/ui/title";
import useToken from "@/hooks/useToken";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const page = () => {
  const { register, handleSubmit } = useForm();

  const { config } = useToken();
  const { data } = useQuery({
    queryKey: ["total-balance"],
    queryFn: () => {
      return axios.get("https://app.neutronx.com/user/balance", config);
    },
  });

  type TokenType =
    | "balance_eth"
    | "balance_usdt_erc"
    | "balance_usdt_bep"
    | "balance_usdt_arb"
    | "balance_usdt_polygon"
    | "balance_usdt_trc"
    | "balance_usdt_optimism";

  type WalletType = "erc" | "trc";

  interface ITransferPayload {
    token_field: TokenType;
    amount: number;
    wallet_type: WalletType;
  }

  const mutation = useMutation({
    mutationFn: (body: ITransferPayload) => {
      return axios.post("https://app.neutronx.com/merchant/transfer", {
        ...body,
      });
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
        <Title>Передать</Title>
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
