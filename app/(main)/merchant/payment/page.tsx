import SelectExpirationTime from "@/components/custom/SelectExpirationTime";
import SelectNetwork from "@/components/custom/SelectNetwork";
import SelectPaymentVariant from "@/components/custom/SelectPaymentVariant";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Title } from "@/components/ui/title";
import { CircleAlert } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <form className="mb-20 dark:text-black ">
      <Title className="text-2xl">Создать новую платежную ссылку</Title>
      <div className="flex gap-2.5 rounded-[10px] bg-[#A6142A] p-2.5 text-white">
        <CircleAlert />
        <p className="font-semibold leading-6">
          Чтобы создать платежную ссылку, пожалуйста сначала пройдите модерацию
        </p>
      </div>
      <span className="inline-block mt-3">Примите оплату поделившись ссылкой</span>
      <Title className="mt-10">Выберите продавца</Title>
      <SelectPaymentVariant />
      <Title className="mt-10">Введите сумму для оплаты</Title>
      <Input className="roboto mt-2" placeholder="0.00" />
      <div className="flex items-center space-x-2 mt-3">
        <Checkbox id="1"/>
        <label
          htmlFor="1"
          className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-black"
        >
          Клиент платит коммисию
        </label>
      </div>
      <Title className="mt-10">ID ордера</Title>
      <Input className="roboto mt-2" placeholder="Введите ID ордера" />
      <span className="inline-block mt-3">Помогает понять за что платит Ваш клиент</span>
      <Title className="mt-10">Выберите валюту платежа</Title>
      <Input className="roboto mt-2" placeholder="USDT" />
      <Title className="mt-10">Выберите сеть</Title>
      <SelectNetwork/>
      <SelectExpirationTime/>
    </form>
  );
};

export default page;
