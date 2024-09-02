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
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const t = useTranslations("Withdraw");
  const [networkState, setNetworkState] = useState();
  const { register, handleSubmit, setValue, getValues } =
    useForm<IWithdrawPayload>();
  const { useWithdrawSend } = useWithdraw();
  const { mutateAsync, error, isError, isPending } = useWithdrawSend();

  console.log("🚀 ~ Page ~ getValues:", getValues("network"));

  useCustomToast({ isError, error });

  return (
    <form
      onSubmit={handleSubmit((e) => mutateAsync(e))}
      className="max-w-[520px]"
    >
      <Title>{t("1st title")}</Title>
      <SelectNetwork setNetwork={setNetworkState} setValue={setValue} />
      <Select onValueChange={(e) => setValue("token", e)}>
        <SelectTrigger className="my-[30px] h-[60px] w-full sm:mt-[16px] sm:h-[50px]">
          <SelectValue placeholder={t("2st select")} />
        </SelectTrigger>
        <SelectContent>
          {networkState === "trc" ? (
            <SelectItem value="usdt_trc">USDT (Trc)</SelectItem>
          ) : (
            <>
              <SelectItem value="usdt_erc">USDT (Erc)</SelectItem>
              <SelectItem value="usdt_arb">USDT (Arbitrum)</SelectItem>
              <SelectItem value="usdt_polygon">USDT (Polygon)</SelectItem>
              <SelectItem value="usdt_bep">USDT (BnB Chain)</SelectItem>
              <SelectItem value="usdt_optimism">USDT (Optimism)</SelectItem>
            </>
          )}
        </SelectContent>
      </Select>
      <Title>{t("2st title")}</Title>
      <Input
        {...register("recipient_address")}
        className="mb-[30px] mt-2"
        placeholder={t("3st select")}
      />
      <Title>{t("3st title")}</Title>
      <Input
        {...register("amount")}
        type="number"
        className="roboto mb-[30px] mt-2"
        placeholder="1000 USDT"
      />
      <CustomButton isLoading={isPending}>Вывести</CustomButton>
    </form>
  );
};

export default Page;
