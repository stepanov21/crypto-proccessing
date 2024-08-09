"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { CircleAlert } from "lucide-react";
import SelectNetwork from "./SelectNetwork";
import Image from "next/image";
import { Title } from "../ui/title";
import { IMerchantGetInvoice, IMerchantInvoice } from "@/api/merchant/fetchers";

const CreatePayment = ({currency, payment_address, amount, network}: Partial<IMerchantGetInvoice>) => {
  return (
    <Dialog>
      <DialogTrigger className="mt-10" asChild>
        <Button variant={"aside"}>Создать продавца</Button>
      </DialogTrigger>
      {/* <DialogContent
        className="gap-[30px] bg-[#0C0716] p-8 pt-20 sm:max-w-[569px]"
        aria-describedby="Создание ссылки"
      >
        <div className="purple-gradient rounded-[18px] p-5">
          <div className="mb-5 flex items-center gap-2.5">
            <Image src={"/Neutronx.svg"} width={40} height={40} alt="logo" />
            <span>Neutronx</span>
          </div>
          <DialogTitle className="mb-7 text-[28px]">
            Выберите валюту
          </DialogTitle>
          <div className="space-y-2.5">
            <span className="roboto">125 PLN</span>
            <Title>Выберите сеть</Title>
            <div className="flex gap-2.5 rounded-[10px] text-ourGray opacity-30">
              <CircleAlert />
              <p className="font-medium leading-6">Вы платите комиссию сети</p>
            </div>
          </div>
          <div className="middle-purple-gradient mt-10 flex items-center rounded-[18px] p-2.5">
            <div className="loader"></div>
            <div className="ml-2.5 flex flex-col gap-2">
              <span>Срок действия</span>
              <span className="roboto text-ourGreen">01:59:33</span>
            </div>
          </div>
        </div>
        <div className="space-y-2.5">
          <Label>Выберите сеть</Label>
          <SelectNetwork />
        </div>
        <Button
          onClick={async () => {
            try {
            } catch (e) {}
          }}
          className="self-center"
        >
          Перейти к оплате
        </Button>
      </DialogContent> */}
      <DialogContent
        className="w-full max-w-[569px] gap-[30px] bg-[#0C0716] p-8 pt-20"
        aria-describedby="Создание ссылки"
      >
        <div className="purple-gradient rounded-[18px] p-5">
          <div className="mb-5 flex items-center gap-2.5">
            <Image src={"/Neutronx.svg"} width={40} height={40} alt="logo" />
            <span>Neutronx</span>
          </div>
          <DialogTitle className="roboto mb-7 text-[28px]">{`${currency} ${amount}`}</DialogTitle>
          <div className="space-y-2.5">
            <span className="roboto">125 PLN</span>
            <Title>{network}</Title>
            <div className="flex gap-2.5 rounded-[10px] text-ourGray opacity-30">
              <CircleAlert />
              <p className="font-medium leading-6">Вы платите комиссию сети</p>
            </div>
          </div>
        </div>
        <div className="purple-gradient flex gap-5 rounded-[18px] p-5">
          <Image src={"/QR.svg"} width={94} height={94} alt="qr" />
          <div className="flex flex-col gap-3 text-wrap">
            <div className="text-ourGray opacity-30">
              Адрес кошелька получателя
            </div>
            <div>{payment_address}</div>
            <div className="text-ourGray opacity-30">
              Вы получите уведомление, как только статус вашего платежа
              измениться.{" "}
            </div>
            <div className="text-ourGreen">
              Оставьте адрес своей электронной почты
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-7">
          <div className="middle-purple-gradient flex items-center rounded-[18px] p-4">
            <div className="loader"></div>
            <div className="ml-2.5 flex flex-col gap-2">
              <span>Срок действия</span>
              <span className="roboto text-ourGreen">01:59:33</span>
            </div>
          </div>
          <div className="middle-purple-gradient flex items-center rounded-[18px] p-4">
            <div className="loader shrink-0"></div>
            <div className="ml-2.5 flex flex-col gap-2 pr-5 leading-6">
              <span>Проверка транзакции в блокчейне</span>
            </div>
          </div>
        </div>
        <Button
          onClick={async () => {
            try {
            } catch (e) {}
          }}
          className="self-center"
        >
          Оплатить с помощью NeutronX
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePayment;
