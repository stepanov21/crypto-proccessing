"use client";

import { IWithdrawPayload } from "@/api/wallets/fetchers";
import { useWithdraw } from "@/api/wallets/queries";
import SelectNetwork from "@/components/custom/SelectNetwork";
import { Button } from "@/components/ui/button";
import CustomButton from "@/components/ui/CustomButton";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Title } from "@/components/ui/title";
import { toast } from "@/components/ui/use-toast";
import useCustomToast from "@/hooks/useCustomToast";
import { Loader2 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const { register, handleSubmit, setValue } = useForm<IWithdrawPayload>();
  const { useWithdrawSend } = useWithdraw();
  const { mutateAsync, error, isError, isPending } = useWithdrawSend();
  console.log("🚀 ~ Page ~ error:", error);

  useCustomToast({ isError, error });

  return (
    <form
      onSubmit={handleSubmit((e) => mutateAsync(e))}
      className="mt-10 max-w-[520px]"
    >
      <Title onClick={() => toast({ title: "Hello" })}>Выберите кошелек</Title>
      <SelectNetwork setValue={setValue} />
      <Select onValueChange={(e) => setValue("token", e)}>
        <SelectTrigger className="my-[30px] h-[60px] w-full sm:mt-[16px]">
          <SelectValue placeholder="Выбрать токен" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="usdt_erc">USDT (Erc)</SelectItem>
          <SelectItem value="usdt_trc">USDT (Trc)</SelectItem>
          <SelectItem value="usdt_arb">USDT (Arbitrum)</SelectItem>
          <SelectItem value="usdt_polygon">USDT (Polygon)</SelectItem>
          {/* <SelectItem value="Tron">Tron</SelectItem> */}
          {/* <SelectItem value="Avalanche">Avalanche</SelectItem> */}
          <SelectItem value="usdt_bep">USDT (BnB Chain)</SelectItem>
          {/* <SelectItem value="Kava">Kava</SelectItem> */}
          <SelectItem value="usdt_optimism">USDT (Optimism)</SelectItem>
        </SelectContent>
      </Select>
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
      <CustomButton isLoading={isPending}>Submit</CustomButton>
    </form>
  );
};

export default Page;
