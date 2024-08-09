"use client";

import { useMerchant } from "@/api/merchant/queries";
import CreatePayment from "@/components/custom/CreatePayment";
import SelectExpirationTime from "@/components/custom/SelectExpirationTime";
import SelectNetwork from "@/components/custom/SelectNetwork";
import SelectPaymentVariant from "@/components/custom/SelectPaymentVariant";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Title } from "@/components/ui/title";
import { CircleAlert } from "lucide-react";
import React from "react";

const Page = () => {
  const { useMerchantPostInvoice } = useMerchant();
  const { mutate, data } = useMerchantPostInvoice();
  console.log(data);
  return (
    <>
      <form className="mb-20 dark:text-black">
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
        <SelectPaymentVariant />
        <Title className="mt-10">Введите сумму для оплаты</Title>
        <Input className="roboto mt-2" placeholder="0.00" />
        <div className="mt-3 flex items-center space-x-2">
          <Checkbox id="1" />
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
        <Input className="roboto mt-2" placeholder="USDT" />
        <Title className="mt-10">Выберите сеть</Title>
        <SelectNetwork />
        <SelectExpirationTime />

        <div
          onClick={() =>
            mutate({
              amount: 0,
              currency: "usdt",
              network: "erc20",
              payment_duration: "15m",
            })
          }
        >
          <CreatePayment {...data} />
        </div>
      </form>
    </>
  );
};

export default Page;
