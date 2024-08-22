"use client";

import React, { useState } from "react";
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

const CreateNewMerchantPopup = () => {
  const { useAddMerchant } = useMerchant();
  const [isWasAdded, setIsWasAdded] = useState(false);
  const [merchantName, setMerchantName] = useState("");
  const { useAllMerchants } = useMerchant();
  const { data } = useAllMerchants();
  console.log("🚀 ~ CreateNewMerchantPopup ~ data:", data);

  return (
    <div>
      <Title>Мерчанты</Title>
      <Dialog>
        <DialogTrigger asChild>
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
                    await useAddMerchant.mutateAsync({ name: merchantName });
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
