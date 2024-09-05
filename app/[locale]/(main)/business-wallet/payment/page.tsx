"use client";

import { IMerchantInvoice } from "@/api/merchant/fetchers";
import { useMerchant } from "@/api/merchant/queries";
import CreatePayment from "@/components/custom/CreatePayment";
import SelectExpirationTime from "@/components/custom/SelectExpirationTime";
import SelectNetwork from "@/components/custom/SelectNetwork";
import SelectPaymentVariant from "@/components/custom/SelectPaymentVariant";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { CircleAlert } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const t = useTranslations("Payment");
  const [networkState, setNetworkState] = useState();
  const { register, handleSubmit, setValue } = useForm<IMerchantInvoice>();
  const { useMerchantPostInvoice } = useMerchant();
  const { mutate, data, isError, error } = useMerchantPostInvoice();
  useCustomToast({ isError, error });

  const postInvoice = (e: IMerchantInvoice) => {
    console.log(e);
    mutate(e);
  };

  return (
    <>
      <form onSubmit={handleSubmit(postInvoice)} className="dark:text-black">
        <Title className="text-2xl">{t("1st title")}</Title>
        <span className="mt-3 inline-block">{t("text")}</span>
        <Title className="mt-10">{t("payment variant")}</Title>
        <SelectPaymentVariant register={register} />
        <Title className="mt-10">{t("2st title")}</Title>
        <Input
          {...register("amount")}
          className="roboto mt-2"
          placeholder="0.00"
        />
        <div aria-disabled className="mt-3 flex items-center space-x-2">
          <Checkbox disabled checked id="1" />
          <label
            htmlFor="1"
            className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-black"
          >
            {t("comment")}
          </label>
        </div>
        <Title className="mt-10">{t("4st title")}</Title>
        <SelectNetwork setValue={setValue} setNetwork={setNetworkState} />
        <Title className="mt-10">{t("3st title")}</Title>
        <Select onValueChange={(e) => setValue("currency", e)}>
          <SelectTrigger className="h-[60px] w-full sm:mt-[16px] sm:h-[50px]">
            <SelectValue placeholder={t("3st title")} />
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
        <SelectExpirationTime setValue={setValue} />
        <Button className="mt-10 w-full" type="submit">
          {t("btn")}
        </Button>
      </form>
    </>
  );
};

export default Page;
