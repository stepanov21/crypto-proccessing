"use client";

import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Title } from "../ui/title";
import { UserRound, X } from "lucide-react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import MerchantWasCreated from "./MerchantWasCreated";

const CreateNewMerchantPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWasAdded, setIsWasAdded] = useState(false);
  const [merchantName, setMerchantName] = useState("");
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: ({ name }: { name: string }) => {
      return axios.post("https://app.neutronx.com/merchant/create_merchant", {
        name,
      });
    },
    onSuccess: (data) => {
      // Invalidate and refetch
      setIsWasAdded(true);
    },
  });

  return (
    <div>
      <Title>Мерчанты</Title>
      {isOpen ? (
        <div className="absolute left-1/2 top-1/2 z-10 flex w-[570px] -translate-x-1/2 -translate-y-1/2 flex-col gap-[60px] rounded-[18px] bg-ourDarkPurple px-7 pb-20 pt-10">
          <Title>Создать нового продавца</Title>
          <div className="space-y-2.5">
            <Label>Введите имя продавца</Label>
            <Input
              onChange={(e) => setMerchantName(e.target.value)}
              value={merchantName}
              placeholder="Имя продавца"
              icon={<UserRound />}
            />
          </div>
          <Button
            onClick={() => mutation.mutateAsync({ name: merchantName })}
            className="self-center"
          >
            Создать продавца
          </Button>
          <X
            className="absolute right-7 top-11 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
      ) : null}
      {isWasAdded ? <MerchantWasCreated /> : null}
      <Button variant={"aside"} onClick={() => setIsOpen(true)}>
        Создать продавца
      </Button>
    </div>
  );
};

export default CreateNewMerchantPopup;
