"use client";

import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Title } from "../ui/title";
import { UserRound } from "lucide-react";
import MerchantWasCreated from "./MerchantWasCreated";
import { useMerchant } from "@/api/merchant/queries";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import useCustomToast from "@/hooks/useCustomToast";
import Image from "next/image";
import { toast } from "../ui/use-toast";

const CreateNewMerchantPopup = () => {
  const { useAddMerchant } = useMerchant();
  const [isWasAdded, setIsWasAdded] = useState(false);
  const [merchantName, setMerchantName] = useState("");
  const { useAllMerchants } = useMerchant();
  const { mutateAsync, isError, error } = useAddMerchant();
  const { data } = useAllMerchants();

  // console.log(error?.response?.data.detail);

  useEffect(() => {
    //@ts-ignore
    if (error?.response?.data.detail) {
      toast({
        title: "Ошибка",
        description: "Торговец уже создан",
        variant: "destructive",
      });
    } else {
      //eslint-disable-next-line
      useCustomToast({ isError, error });
    }
    //eslint-disable-next-line
  }, [isError]);

  return (
    <div>
      <Title>Мерчанты</Title>
      <div className="mb-8 mt-4 flex items-center gap-4">
        <Image src={"/avatar.png"} width={40} height={40} alt="avatar" />
        <span>{data?.name}</span>
      </div>
      <Dialog>
        <DialogTrigger disabled={data} asChild>
          <Button variant={"aside"}>Создать продавца</Button>
        </DialogTrigger>
        <DialogContent
          className="sm:max-w-[569px]"
          aria-describedby="Создать нового продавца"
        >
          {!isWasAdded ? (
            <>
              <DialogTitle>Создать нового продавца</DialogTitle>
              <div className="space-y-2.5">
                <Label>Введите имя продавца</Label>
                <Input
                  onChange={(e) => setMerchantName(e.target.value)}
                  value={merchantName}
                  placeholder="Имя продавца"
                  icon={<UserRound size={20} />}
                />
              </div>
              <Button
                onClick={async () => {
                  try {
                    await mutateAsync({ name: merchantName });
                    setIsWasAdded(true);
                  } catch (e) {}
                }}
                className="self-center"
              >
                Создать продавца
              </Button>
            </>
          ) : null}

          {isWasAdded ? <MerchantWasCreated /> : null}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateNewMerchantPopup;
