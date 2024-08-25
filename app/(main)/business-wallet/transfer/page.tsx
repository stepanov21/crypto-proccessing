"use client";

import { useMerchant } from "@/api/merchant/queries";
import { ITransferPayload } from "@/api/transaction/types";
import SelectWallet from "@/components/custom/SelectWallet";
import WalletItem from "@/components/custom/WalletItem";
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
import useCustomToast from "@/hooks/useCustomToast";
import { client } from "@/providers/TanstackQueryClientProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const { register, handleSubmit, setValue } = useForm();

  const { useMerchantTransferBusinessToOwn } = useMerchant();
  const { mutateAsync, isPending, isError, error } =
    useMerchantTransferBusinessToOwn();

  useCustomToast({ isError, error });

  return (
    <div>
      <form
        onSubmit={handleSubmit((e) => mutateAsync(e as ITransferPayload))}
        className="mt-10 sm:mt-0 max-w-[520px]"
      >
        <Title>Выберите кошелек</Title>
        <SelectWallet setValue={setValue} />
        <Select onValueChange={(e) => setValue("wallet_type", e)}>
          <SelectTrigger className="my-[30px] h-[60px] sm:h-[50px] w-full">
            <SelectValue placeholder="Выбрать сеть" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="erc">Erc</SelectItem>
            <SelectItem value="trc">Trc</SelectItem>
          </SelectContent>
        </Select>
        <Title>Введите сумму для отправки</Title>
        <Input
          {...register("amount")}
          type="number"
          className="roboto mb-[30px] mt-2"
          placeholder="1000 USDT"
        />
        <CustomButton isLoading={isPending} className="w-full">
          Submit
        </CustomButton>
      </form>
    </div>
  );
};

export default Page;
