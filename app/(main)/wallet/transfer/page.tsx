"use client";

import { useMerchant } from "@/api/merchant/queries";
import { ITransferPayload } from "@/api/transaction/types";
import SelectWallet from "@/components/custom/SelectWallet";
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
import React from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const { register, handleSubmit, setValue } = useForm();

  const { useMerchantTransferOwnToBusiness } = useMerchant();
  const { mutateAsync, isError, error, isPending, isSuccess } =
    useMerchantTransferOwnToBusiness();

  useCustomToast({ isError, error });

  if (isSuccess) {
    toast({
      title: "Перевод успешно отправлен!",
    });
  }

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
        <CustomButton isLoading={isPending} className="w-full">
          Перевести
        </CustomButton>
      </form>
    </div>
  );
};

export default Page;
