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
        name: name
      });
    },
    onSuccess: (data) => {
      // Invalidate and refetch
      setIsWasAdded(true);
    },
  });

  return (
    <>
      {isOpen ? (
        <div className="w-[570px] px-7 pt-10 pb-20 flex flex-col bg-ourDarkPurple gap-[60px] rounded-[18px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
            className="absolute top-11 right-7 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
      ) : null}
      {isWasAdded ? <MerchantWasCreated /> : null}
      <Button
        className="bg-ourPurple text-white"
        onClick={() => setIsOpen(true)}
      >
        Создать продавца
      </Button>
    </>
  );
};

export default CreateNewMerchantPopup;
