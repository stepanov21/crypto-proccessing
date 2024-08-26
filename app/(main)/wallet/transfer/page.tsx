"use client";

import { useMerchant } from "@/api/merchant/queries";
import { ITransferPayload } from "@/api/transaction/types";
import SelectWallet from "@/components/custom/SelectWallet";
import { Button } from "@/components/ui/button";
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
import React from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const { register, handleSubmit, setValue } = useForm();

  const { useMerchantTransferOwnToBusiness } = useMerchant();
  const { mutateAsync, isError, error } = useMerchantTransferOwnToBusiness();

  useCustomToast({ isError, error });

  return (
    <div>
      <form
        onSubmit={handleSubmit((e) => mutateAsync(e as ITransferPayload))}
        className="max-w-[520px]"
      >
        <Title>Выберите кошелек</Title>
        <SelectWallet setValue={setValue} />
        <Title className="mt-[30px]">Введите сумму для отправки</Title>
        <Input
          {...register("amount")}
          type="number"
          className="roboto mb-[30px] mt-2"
          placeholder="1000 USDT"
        />
        <Button className="w-full" type="submit">
          Перевести
        </Button>
      </form>
    </div>
  );
};

export default Page;
