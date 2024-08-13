"use client";

import { ITransferPayload } from "@/api/transaction/types";
import SelectWallet from "@/components/custom/SelectWallet";
import WalletItem from "@/components/custom/WalletItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Title } from "@/components/ui/title";
import { client } from "@/providers/TanstackQueryClientProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const { register, handleSubmit, setValue } = useForm();

  return (
    <div>
      <form
        onSubmit={handleSubmit((e) => console.log(e))}
        className="mt-10 max-w-[520px]"
      >
        <Title>Выберите кошелек</Title>
        <SelectWallet setValue={setValue} />
        <Title className="mt-[30px]">Передать</Title>
        <Input
          {...register("wallet_type")}
          className="mb-[30px] mt-2"
          placeholder="Личный Кошелек"
        />

        <Title className="text-[15px] font-medium">
          Ваши средства будут переведены на личный кошелек USDT
        </Title>
        <div className="mb-[30px] rounded-[18px] bg-ourPurple p-2.5 dark:bg-ourGray">
          <WalletItem balance={300} icon="">
            {"USDT"}
          </WalletItem>
        </div>

        <Title>Введите сумму для отправки</Title>
        <Input
          {...register("amount")}
          className="roboto mb-[30px] mt-2"
          placeholder="1000 USDT"
        />
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Page;
