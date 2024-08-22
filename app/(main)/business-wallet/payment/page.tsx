"use client";

import { IMerchantInvoice } from "@/api/merchant/fetchers";
import { useMerchant } from "@/api/merchant/queries";
import SelectExpirationTime from "@/components/custom/SelectExpirationTime";
import SelectNetwork from "@/components/custom/SelectNetwork";
import SelectPaymentVariant from "@/components/custom/SelectPaymentVariant";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Title } from "@/components/ui/title";
import useCustomToast from "@/hooks/useCustomToast";
import { CircleAlert } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

const Page = () => {
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
      <form
        onSubmit={handleSubmit(postInvoice)}
        className="mb-20 dark:text-black"
      >
        <Title className="text-2xl">Создать новую платежную ссылку</Title>
        <div className="flex gap-2.5 rounded-[10px] bg-[#A6142A] p-2.5 text-white">
          <CircleAlert />
          <p className="font-semibold leading-6">
            Чтобы создать платежную ссылку, пожалуйста сначала пройдите
            модерацию
          </p>
        </div>
        <span className="mt-3 inline-block">
          Примите оплату поделившись ссылкой
        </span>
        <Title className="mt-10">Выберите продавца</Title>
        <SelectPaymentVariant register={register} />
        <Title className="mt-10">Введите сумму для оплаты</Title>
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
            Клиент платит коммисию
          </label>
        </div>
        <Title className="mt-10">ID ордера</Title>
        <Input className="roboto mt-2" placeholder="Введите ID ордера" />
        <span className="mt-3 inline-block">
          Помогает понять за что платит Ваш клиент
        </span>
        <Title className="mt-10">Выберите валюту платежа</Title>
        <Input className="roboto mt-2" disabled placeholder="USDT" />
        <Title className="mt-10">Выберите сеть</Title>
        <SelectNetwork setValue={setValue} />
        <SelectExpirationTime setValue={setValue} />
        <Button className="mt-10 w-full" type="submit">
          Создать платеж
        </Button>
        <div>{/* <CreatePayment {...data} /> */}</div>
      </form>
    </>
  );
};

export default Page;
