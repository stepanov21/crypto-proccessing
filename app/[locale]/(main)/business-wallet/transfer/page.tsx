"use client";

import { useMerchant } from "@/api/merchant/queries";
import { ITransferPayload } from "@/api/transaction/types";
import SelectBusinessWallet from "@/components/custom/SelectBusinessWallet";
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
import { toast } from "@/components/ui/use-toast";
import useCustomToast from "@/hooks/useCustomToast";
import { client } from "@/providers/TanstackQueryClientProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useTranslations } from "next-intl";
import React from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const t = useTranslations("Transfer");
  const { register, handleSubmit, setValue } = useForm();

  const { useMerchantTransferBusinessToOwn } = useMerchant();
  const { mutateAsync, isPending, isError, isSuccess, error } =
    useMerchantTransferBusinessToOwn();

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
        <Title>{t("1st title")}</Title>
        <SelectBusinessWallet setValue={setValue} />
        <Title className="mt-[30px]">{t("2st title")}</Title>
        <Input
          {...register("amount")}
          type="number"
          className="roboto mb-[30px] mt-2"
          placeholder="1000 USDT"
        />
        <CustomButton isLoading={isPending} className="w-full">
          {t("btn")}
        </CustomButton>
      </form>
    </div>
  );
};

export default Page;
